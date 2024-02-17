import { CITIES } from "../const";
import { NextRequest } from "next/server";
import { isValidId } from "@/utils/helper";

export const runtime = "edge";
export const preferredRegion = ["fra1", "cdg1", "dub1"];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const cities = CITIES[id];

  if (!isValidId(Number(id))) {
    return new Response("Geçersiz plaka", {
      status: 400,
    });
  }

  const urls = cities.map((c) =>
    encodeURI(
      [
        "https://www.bp.com/bp-tr-pump-prices/api/PumpPrices?strCity=",
        c,
      ].join(""),
    ),
  );

  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));

    const result = normalizeData([].concat(...data))

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

function normalizeData(
  data: {
    District: string;
    Benzin: string;
    Motorin: string;
    LpgPrice: string;
  }[],
) {
  return {
    sonYenileme: new Date().toUTCString(),
    fiyatlar: data.map((city: any) => {
      return {
        ilce: city.District,
        benzin: city.Benzin,
        mazot: city.Motorin,
        lpg: city.LpgPrice,
      };
    }),
  };
}
