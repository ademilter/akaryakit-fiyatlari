import { CITIES } from "../const";
import { NextRequest } from "next/server";

export const runtime = "edge";
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
    " https://www.bp.com/bp-tr-pump-prices/api/PumpPrices?strCity=",
    code,
  ].join("");

  try {
    const response = await fetch(url);
    const data: {
      DtPriceListDate: string;
      District: string;
      City: string;
      Benzin: string;
      GazYagi: string;
      BenzinUltimate: string;
      MotorinUltimate: string;
      Motorin: string;
      FuelOil: string;
      KaloriferYakiti: string;
      FuelOilYuksekKukurt: string;
      LpgPrice: string;
    }[] = await response.json();

    const result = {
      lastUpdate: new Date().toUTCString(),
      data: data.map((city: any) => {

        return {
          ilce: city.District,
          benzin: city.Benzin,
          mazot: city.Motorin,
          lpg: city.LpgPrice,
        };
      }),
    };

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
