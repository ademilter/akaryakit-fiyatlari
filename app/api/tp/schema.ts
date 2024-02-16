const schema = {
  schema: {
    sonYenileme: {
      fill: new Date().toUTCString(),
    },
    fiyatlar: {
      selector: ".pricetable table tbody tr",
      type: "array",
      schema: {
        ilce: "td:nth-child(1)",
        benzin: {
          selector: "td:nth-child(2)",
          transform,
        },
        mazot: {
          selector: "td:nth-child(5)",
          transform,
        },
        lpg: {
          selector: "td:nth-child(9)",
          transform,
        },
      },
    },
  },
};

function transform(val: string) {
  return Number(val.replace(/,/, "."));
}

export { schema };
