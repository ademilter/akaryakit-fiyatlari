import type { Schema } from "muninn";
import { parse } from "muninn";
import { schema } from "../schema";
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
  const city = CITIES[id];
  let urls = [];
  let result = null;

  if (!isValidId(Number(id))) {
    return new Response("Geçersiz plaka", {
      status: 400,
    });
  }

  if (Array.isArray(city)) {
    urls = city.map((c) => {
      return `https://www.sunpettr.com.tr/yakit-fiyatlari-${c}`;
    });
  } else {
    urls = [`https://www.sunpettr.com.tr/yakit-fiyatlari-${city}`];
  }

  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.text()));

    if (urls.length > 1) {
      result = {
        sonYenileme: {
          fill: new Date().toUTCString(),
        },
        fiyatlar: [
          ...(parse(data[0], schema as Schema).fiyatlar as []),
          ...(parse(data[1], schema as Schema).fiyatlar as []),
        ],
      };
    } else {
      result = {
        sonYenileme: {
          fill: new Date().toUTCString(),
        },
        fiyatlar: [...(parse(data[0], schema as Schema).fiyatlar as [])],
      };
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
