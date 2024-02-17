import type { Schema } from "muninn";
import { parse } from "muninn";
import { schema } from "../schema";
import { MCITIES } from "../const";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const preferredRegion = ["fra1", "cdg1", "dub1"];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const city = MCITIES[id];

  if (!city) {
    return new Response("Geçersiz şehir adı", {
      status: 400,
    });
  }

  const url = `https://moil.com.tr/akaryakit-fiyatlari?il=${id}`;

  try {
    const response = await fetch(url);
    const html = await response.text();
    const tableStartIndex = html.indexOf("<table");
    const tableEndIndex = html.indexOf("</table>", tableStartIndex);
    const tableHtml = html.slice(tableStartIndex, tableEndIndex + 8);
    const data = parse(tableHtml, schema as Schema);
    const lines = data.trim().split(/\n\s*\n\s*/);
    const result = [];

    lines.forEach((line: any) => {
      const parts = line.trim().split(/\s+/);
      const ilce = parts[0];
      const benzin = parseFloat(parts[1].replace(",", "."));
      const mazot = parseFloat(parts[2].replace(",", "."));
      const lpg = parseFloat(parts[4].replace(",", "."));

      result.push({
        ilce,
        benzin,
        mazot,
        lpg,
      });
    });
    result.shift();
    const finalResult = {
      sonYenileme: new Date().toUTCString(),
      fiyatlar: result,
    };

    return new Response(JSON.stringify(finalResult), {
      status: 200,
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600",
        "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
      },
    });
  } catch (error) {
    return new Response("Veri alınamadı", { status: 500 });
  }
}
