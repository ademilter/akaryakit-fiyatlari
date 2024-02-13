const schema = {
  schema: {
    lastUpdate: {
      fill: new Date().toUTCString(),
    },
    data: {
      selector: "table.table-prices tr.price-row",
      type: "array",
      schema: {
        ilce: "td:nth-child(1)",
        benzin: {
          selector: "td:nth-child(2) span.without-tax | float",
        },
        mazot: {
          selector: "td:nth-child(4) span.without-tax | float",
        },
        lpg: {
          selector: "td:nth-child(5) span.without-tax | float",
        },
      },
    },
  },
};

export { schema };
