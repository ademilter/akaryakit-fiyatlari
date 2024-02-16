import { NextRequest } from "next/server";
import { isValidId } from "@/utils/helper";

export const runtime = "edge";
export const preferredRegion = ["fra1", "cdg1", "dub1"];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = Number(params.id);
  let result = null;

  if (!isValidId(Number(id))) {
    return new Response("Geçersiz plaka", {
      status: 400,
    });
  }

  const urls = id === 34 ? [opetApiUrl(34), opetApiUrl(934)] : [opetApiUrl(id)];

  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));

    if (urls.length > 1) {
      result = normalizeData([...data[0], ...data[1]]);
    } else {
      result = normalizeData(data[0]);
    }

    return Response.json(result, {
      status: 200,
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600",
        "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch the data", { status: 500 });
  }
}

function normalizeData(data: any[]) {
  return {
    sonYenileme: new Date().toUTCString(),
    fiyatlar: data.map((city: any) => {
      const a100 = city.prices.find((o: any) => o.productCode === "A100");
      const a128 = city.prices.find((o: any) => o.productCode === "A128");
      const a110 = city.prices.find((o: any) => o.productCode === "A110");

      return {
        ilce: city.districtName,
        benzin: a100.amount,
        mazot: a128.amount,
        lpg: a110.amount,
      };
    }),
  };
}

function opetApiUrl(id: number): string {
  return [
    "https://api.opet.com.tr/api/fuelprices/prices?ProvinceCode=",
    id,
    "&IncludeAllProducts=true",
  ].join("");
}
