import { type NextRequest } from "next/server";
import { parse } from "muninn";
import { priceSchema } from "@/utils/schemas";
import { CITY_NAMES } from "@/utils/const";

export const revalidate = 3600; // 60*60*1
export const preferredRegion = ["fra1", "cdg1", "dub1"];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sehir = searchParams.get("sehir") || "";

  if (CITY_NAMES.indexOf(sehir) === -1) {
    return new Response("Geçersiz şehir adı => ?sehir=istanbul", {
      status: 400,
    });
  }

  const url = `https://www.petrolofisi.com.tr/akaryakit-fiyatlari/${sehir}-akaryakit-fiyatlari`;

  // fetch the data
  const istanbul = await fetch(url, { next: { revalidate: 3600 } });
  const istanbulText = await istanbul.text();

  // parse the data
  const result = parse(istanbulText, priceSchema);

  if (!result.tables) {
    return new Response("Failed to parse the data", { status: 500 });
  }

  // return the data
  return Response.json(result.tables, { status: 200 });
}
