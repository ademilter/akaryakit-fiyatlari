const schema = {
  schema: {
    sonYenileme: {
      fill: new Date().toUTCString(),
    },
    fiyatlar: {
      selector: "table.prices tbody tr",
      type: "array",
      schema: {
        ilce: "td:nth-child(2)",
        benzin: {
          selector: "td:nth-child(5)",
          transform,
        },
        mazot: {
          selector: "td:nth-child(4)",
          transform,
        },
        lpg: {
          selector: "td:nth-child(6)",
          transform,
        },
      },
    },
  },
};

function transform(val: string) {
  return Number(val.replace(/,/, ".").match(/[0-9.]+/));
}

export { schema };
