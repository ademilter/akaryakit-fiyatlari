"use client";

import { CITIES } from "./api/alpet/const";
import { useEffect, useState } from "react";

export const brands = {
  po: "Petrol Ofisi",
  alpet: "Alpet",
  bp: "BP",
  opet: "Opet",
  tp: "Türk Petrolleri",
};

export default function Demo() {
  const [brand, setBrand] = useState("po");
  const [id, setId] = useState(34);
  const [data, setData] = useState<{ sonYenileme: string; fiyatlar: [] }>();

  async function getData() {
    const response = await fetch(`api/${brand}/${id}`);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [brand, id]);

  return (
    <>
      <h4 className="font-semibold mb-2">Demo</h4>

      <div className="flex items-center gap-2">
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {Object.keys(brands).map((brand: string) => (
            <option key={brand} value={brand}>
              {/* @ts-ignore*/}
              {brands[brand]}
            </option>
          ))}
        </select>
        <select value={id} onChange={(e) => setId(Number(e.target.value))}>
          {Object.keys(CITIES).map((id) => (
            <option key={id} value={id}>
              {CITIES[id]}
            </option>
          ))}
        </select>
      </div>

      <table className="mt-4">
        <thead>
          <th>İlçe</th>
          <th>Benzin</th>
          <th>Mazot</th>
          <th>LPG</th>
        </thead>

        <tbody>
          {data?.fiyatlar.map((item: any) => (
            <tr>
              <td>{item.ilce}</td>
              <td className="tabular-nums slashed-zero">
                {item.benzin} <span className="opacity-60 text-sm">TL/L</span>
              </td>
              <td className="tabular-nums slashed-zero">
                {item.mazot} <span className="opacity-60 text-sm">TL/L</span>
              </td>
              <td className="tabular-nums slashed-zero">
                {item.lpg} <span className="opacity-60 text-sm">TL/L</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
