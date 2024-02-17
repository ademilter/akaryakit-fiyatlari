"use client";

import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Heading, Link, Table } from "@radix-ui/themes";
import Demo from "./demo";

export default function Home() {
  return (
    <main className="p-6 md:p-10">
      {/*<ThemePanel />*/}

      <Heading size="5">
        Türkiyedeki akaryakıt istasyonlarının güncel fiyatları
      </Heading>

      <div className="mt-4 md:max-w-[320px]">
        <Table.Root variant="surface" size="1">
          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>Petrol Ofisi</Table.RowHeaderCell>
              <Table.RowHeaderCell>
                <Link underline="always" href="/api/po/34">
                  /api/po/34
                </Link>
              </Table.RowHeaderCell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Opet</Table.RowHeaderCell>
              <Table.Cell>
                <Link underline="always" href="/api/opet/34">
                  /api/opet/34
                </Link>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Alpet</Table.RowHeaderCell>
              <Table.Cell>
                <Link underline="always" href="/api/alpet/34">
                  /api/alpet/34
                </Link>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Türkiye Petrolleri</Table.RowHeaderCell>
              <Table.Cell>
                <Link underline="always" href="/api/tp/34">
                  /api/tp/34
                </Link>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                BP <span className="opacity-60">(ban yedik :/)</span>
              </Table.RowHeaderCell>
              <Table.Cell>
                <Link underline="always" href="/api/bp/34">
                  /api/bp/34
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>Sunpet</Table.RowHeaderCell>
              <Table.Cell>
                <Link underline="always" href="/api/sunpet/34">
                  /api/sunpet/34
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>

      <div className="mt-4">
        <Callout.Root size="1" color="gray">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            Sorun bildirmek veya katkı yapmak için{" "}
            <Link
              underline="always"
              href="https://github.com/ademilter/akaryakit-fiyatlari"
            >
              github.com/ademilter/akaryakit-fiyatlari
            </Link>
          </Callout.Text>
        </Callout.Root>
      </div>

      <div className="bg-zinc-100 mt-6 md:mt-10 -mx-6 md:-mx-10 p-6 md:p-10">
        <Demo />
      </div>
    </main>
  );
}
