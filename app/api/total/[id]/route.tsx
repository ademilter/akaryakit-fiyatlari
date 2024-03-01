import { NextRequest } from "next/server";

export const runtime = "edge";
export const preferredRegion = ["fra1", "cdg1", "dub1"];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = Number(params.id);
  let result = null;

  const urls =
    id === 34 ? [totalApiUrl(34), totalApiUrl(934)] : [totalApiUrl(id)];

  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));
    console.log(data);
    if (urls.length > 1) {
      result = normalizeData([...data[0], ...data[1]]);
    } else {
      result = normalizeData(data[0]);
    }
    return Response.json(data, {
      status: 200,
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600",
        "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch the data", { status: 500 });
  }
}

function totalApiUrl(id: number): string {
  return [
    "https://apimobiletest.oyakpetrol.com.tr//exapi/fuel_prices/",
    id,
  ].join("");
}

function normalizeData(data: any[]) {
  return {
    sonYenileme: new Date().toUTCString(),
    fiyatlar: data.map((city: any) => {
      return {
        ilce: city.county_name,
        benzin: city.kursunsuz_95_excellium_95,
        mazot: city.motorin,
        lpg: city.otogaz,
      };
    }),
  };
}
