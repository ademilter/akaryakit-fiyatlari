import { type NextRequest } from "next/server";
import { CITIES } from "./const";

export const runtime = "edge";
export const preferredRegion = ["fra1", "cdg1", "dub1"];

export async function GET(request: NextRequest) {
  return Response.json(CITIES, {
    status: 200,
    headers: {
      "Content-type": "application/json; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600",
      "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
    },
  });
}
