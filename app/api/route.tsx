import {parse} from 'muninn';
import {priceSchema} from "@/utils/schemas";

export const revalidate = 3600

export async function GET(request: Request) {
    const url = URLs.istanbul

    // fetch the data
    const istanbul = await fetch(url)
    const istanbulText = await istanbul.text()

    // parse the data
    const result = parse(istanbulText, priceSchema);

    // return the data
    return Response.json(result, {status: 200})
}

const URLs = {
    istanbul: "https://www.petrolofisi.com.tr/akaryakit-fiyatlari/istanbul-akaryakit-fiyatlari"
}
