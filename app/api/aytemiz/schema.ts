const schema = {
  schema: {
    sonYenileme: {
      fill: new Date().toUTCString(),
    },
    fiyatlar: {
      selector: "#fuel-price-table tbody tr",
      type: "array",
      schema: {
        il: "td:nth-child(1) div",
        benzin: {
          selector: "td:nth-child(2)",
          transform: (val: any) => parseFloat(val.replace(",", ".")),
        },
        mazot: {
          selector: "td:nth-child(3)",
          transform: (val: any) => parseFloat(val.replace(",", ".")),
        },
      },
    },
  },
};

export { schema };
