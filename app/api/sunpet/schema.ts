const schema = {
  schema: {
    sonYenileme: {
      fill: new Date().toUTCString(),
    },
    fiyatlar: {
      selector: "table.primary-table tbody tr",
      type: "array",
      schema: {
        ilce: "td:nth-child(1)",
        benzin: {
          selector: "td:nth-child(3) span b",
          convert: (text: string) =>
            parseFloat(text.replace(" ₺", "").replace(",", ".")),
        },
        mazot: {
          selector: "td:nth-child(4) span b",
          convert: (text: string) =>
            parseFloat(text.replace(" ₺", "").replace(",", ".")),
        },
        lpg: {
          selector: "td:nth-child(6) span b",
          convert: (text: string) =>
            parseFloat(text.replace(" ₺", "").replace(",", ".")),
        },
      },
    },
  },
};

export { schema };
