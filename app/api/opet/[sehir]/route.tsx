import { CITIES } from "../const";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const revalidate = 3600; // 60*60*1
export const preferredRegion = ["fra1", "cdg1", "dub1"];

export async function GET(
  request: NextRequest,
  { params }: { params: { sehir: string } },
) {
  const sehir = params.sehir;
  const code = CITIES[sehir];

  if (!code) {
    return new Response("Geçersiz şehir adı", {
      status: 400,
    });
  }

  const url = [
    "https://api.opet.com.tr/api/fuelprices/prices?ProvinceCode=",
    code,
    "&IncludeAllProducts=true",
  ].join("");

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    const data: {
      districtName: string;
      prices: { productCode: string; amount: number }[];
    }[] = await response.json();

    const result = {
      lastUpdate: new Date().toUTCString(),
      data: data.map((city: any) => {
        const a100 = city.prices.find((o: any) => o.productCode === "A100");
        const a121 = city.prices.find((o: any) => o.productCode === "A121");
        const a128 = city.prices.find((o: any) => o.productCode === "A128");
        const a110 = city.prices.find((o: any) => o.productCode === "A110");

        return {
          ilce: city.districtName,
          benzin: {
            fiyatKDVli: a100.amount,
          },
          mazotUltra: {
            fiyatKDVli: a121.amount,
          },
          mazotEko: {
            fiyatKDVli: a128.amount,
          },
          gaz: {
            fiyatKDVli: a110.amount,
          },
        };
      }),
    };

    return Response.json(result, {
      status: 200,
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch the data", { status: 500 });
  }
}
