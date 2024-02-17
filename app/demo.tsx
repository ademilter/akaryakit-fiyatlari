"use client";

import { CITIES } from "./api/aytemiz/const";
import { MCITIES } from "./api/moil/const";

import { useEffect, useState } from "react";
import { Select, Table } from "@radix-ui/themes";

export const brands = {
  po: "Petrol Ofisi",
  alpet: "Alpet",
  bp: "BP",
  opet: "Opet",
  tp: "Türk Petrolleri",
  sunpet: "Sunpet",
  go: "Go",
  moil: "M oil",
};

type BrandType = {
  [key: string]: string;
};

const defaultData: { sonYenileme: string; fiyatlar: [] } = {
  sonYenileme: "",
  fiyatlar: [],
};

export default function Demo() {
  const [brand, setBrand] = useState("po");
  const [id, setId] = useState(34);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(defaultData);

  async function getData() {
    setLoading(true);
    setData(defaultData);
    try {
      const response = await fetch(`api/${brand}/${id}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [brand, id]);

  return (
    <>
      <div className="flex items-center gap-2">
        <Select.Root
          disabled={loading}
          value={brand}
          onValueChange={(value) => setBrand(value)}
        >
          <Select.Trigger />
          <Select.Content>
            {Object.keys(brands).map((brand: string) => (
              <Select.Item key={brand} value={brand}>
                {/* @ts-ignore*/}
                {brands[brand]}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Select.Root
          disabled={loading}
          value={String(id)}
          onValueChange={(value) => setId(Number(value))}
        >
          <Select.Trigger />
          <Select.Content>
            {Object.keys(brand === "moil" ? MCITIES : CITIES).map((id) => (
              <Select.Item key={id} value={id}>
                {brand === "moil" ? MCITIES[id] : CITIES[id]}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>

      <div className="mt-4">
        <Table.Root variant="surface">
          <Table.Header className="sticky top-0 z-10 bg-white">
            <Table.Row>
              <Table.ColumnHeaderCell className="rounded-tl-xl">
                İlçe
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Benzin</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Mazot</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="rounded-tr-xl">
                LPG
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data && data?.fiyatlar.map((item: any) => (
              <Table.Row key={item.ilce}>
                <Table.RowHeaderCell>{item.ilce}</Table.RowHeaderCell>
                <Table.RowHeaderCell className="whitespace-nowrap">
                  {item.benzin}{" "}
                  <span className="hidden md:inline opacity-40 text-sm">
                    TL
                  </span>
                </Table.RowHeaderCell>
                <Table.RowHeaderCell className="whitespace-nowrap">
                  {item.mazot}{" "}
                  <span className="hidden md:inline opacity-40 text-sm">
                    TL
                  </span>
                </Table.RowHeaderCell>
                <Table.RowHeaderCell className="whitespace-nowrap">
                  {item.lpg}{" "}
                  <span className="hidden md:inline opacity-40 text-sm">
                    TL
                  </span>
                </Table.RowHeaderCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </>
  );
}
