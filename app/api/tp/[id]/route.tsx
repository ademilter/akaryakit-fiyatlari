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

  if (!isValidId(Number(id))) {
    return new Response("Geçersiz plaka", {
      status: 400,
    });
  }

  try {
    const city = CITIES[id];
    const url = `https://www.tppd.com.tr/${city}-akaryakit-fiyatlari`;

    const response = await fetch(url);
    const data = await response.text();

    const result = parse(data, schema as Schema);

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
