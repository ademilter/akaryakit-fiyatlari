const schema = {
  schema: {
    date: {
      fill: new Date().toUTCString(),
    },
    data: {
      selector: "table.table-prices tr.price-row",
      type: "array",
      schema: {
        ilce: "td:nth-child(1)",
        benzin: {
          selector: "td:nth-child(2)",
          schema: {
            // fiyat: "span.with-tax",
            fiyatKDVli: "span.without-tax",
          },
        },
        mazotMax: {
          selector: "td:nth-child(3)",
          schema: {
            // fiyat: "span.with-tax",
            fiyatKDVli: "span.without-tax",
          },
        },
        mazotPro: {
          selector: "td:nth-child(4)",
          schema: {
            // fiyat: "span.with-tax",
            fiyatKDVli: "span.without-tax",
          },
        },
        gaz: {
          selector: "td:nth-child(5)",
          schema: {
            // fiyat: "span.with-tax",
            fiyatKDVli: "span.without-tax",
          },
        },
      },
    },
  },
};

export { schema };
