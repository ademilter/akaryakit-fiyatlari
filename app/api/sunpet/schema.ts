const schema = {
  schema: {
    fiyatlar: {
      selector: "table.primary-table tbody tr",
      type: "array",
      schema: {
        ilce: "td:nth-child(1)",
        benzin: {
          selector: "td:nth-child(3) span b",
          transform: (val: string) =>
            parseFloat(val.replace(" ₺", "").replace(",", ".")),
        },
        mazot: {
          selector: "td:nth-child(4) span b",
          transform: (val: string) =>
            parseFloat(val.replace(" ₺", "").replace(",", ".")),
        },
        lpg: {
          selector: "td:nth-child(6) span b",
          transform: (val: string) =>
            parseFloat(val.replace(" ₺", "").replace(",", ".")),
        },
      },
    },
  },
};

export { schema };
