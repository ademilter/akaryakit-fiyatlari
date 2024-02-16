const schema = {
  schema: {
    sonYenileme: {
      fill: new Date().toUTCString(),
    },
    fiyatlar: {
      selector: "table.table-prices tr.price-row",
      type: "array",
      schema: {
        ilce: "td:nth-child(1)",
        benzin: {
          selector: "td:nth-child(2) span.with-tax | float",
        },
        mazot: {
          selector: "td:nth-child(4) span.with-tax | float",
        },
        lpg: {
          selector: "td:nth-child(5) span.with-tax | float",
        },
      },
    },
  },
};

export { schema };
