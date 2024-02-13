const priceSchema = {
  schema: {
    tables: {
      selector: "table.table-prices tr.price-row | array",
      schema: {
        ilce: "td:nth-child(1)",
        vMax95: {
          selector: "td:nth-child(2)",
          schema: {
            fiyat: "span.with-tax",
            fiyatKDVli: "span.without-tax",
          },
        },
        vMaxDiesel: {
          selector: "td:nth-child(3)",
          schema: {
            fiyat: "span.with-tax",
            fiyatKDVli: "span.without-tax",
          },
        },
        vProDiesel: {
          selector: "td:nth-child(4)",
          schema: {
            fiyat: "span.with-tax",
            fiyatKDVli: "span.without-tax",
          },
        },
        poGaz: {
          selector: "td:nth-child(5)",
          schema: {
            fiyat: "span.with-tax",
            fiyatKDVli: "span.without-tax",
          },
        },
      },
    },
  },
};

export { priceSchema };
