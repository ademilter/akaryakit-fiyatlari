"use client";

import { CITIES } from "./api/aytemiz/const";
import { useEffect, useState } from "react";
import { Select, Table } from "@radix-ui/themes";

export const brands = {
  po: "Petrol Ofisi",
  alpet: "Alpet",
  bp: "BP",
  opet: "Opet",
  tp: "Türk Petrolleri",
  sunpet: "Sunpet",
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
            {Object.keys(CITIES).map((id) => (
              <Select.Item key={id} value={id}>
                {CITIES[id]}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>

      <div className="mt-4">
        <Table.Root variant="surface" size={{ xs: "1", md: "2" }}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>İlçe</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Benzin</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Mazot</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>LPG</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data?.fiyatlar.map((item: any) => (
              <Table.Row key={item.ilce}>
                <Table.RowHeaderCell>{item.ilce}</Table.RowHeaderCell>
                <Table.RowHeaderCell className="whitespace-nowrap">
                  {item.benzin}
                  <span className="opacity-40 text-sm">TL</span>
                </Table.RowHeaderCell>
                <Table.RowHeaderCell className="whitespace-nowrap">
                  {item.mazot}
                  <span className="opacity-40 text-sm">TL</span>
                </Table.RowHeaderCell>
                <Table.RowHeaderCell className="whitespace-nowrap">
                  {item.lpg}
                  <span className="opacity-40 text-sm">TL</span>
                </Table.RowHeaderCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </>
  );
}
