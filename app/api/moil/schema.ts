const schema = {
  sonYenileme: {
    fill: new Date().toUTCString(),
  },
  fiyatlar: {
    selector: "table tbody tr",
    type: "array",
    schema: {
      ilce: {
        selector: "td:nth-child(1)",
        type: "text",
      },
      benzin: {
        selector: "td:nth-child(2)",
        type: "text",
        transform: (val: string) => parseFloat(val),
      },
      lpg: {
        selector: "td:nth-child(3)",
        type: "text",
        transform: (val: string) => parseFloat(val),
      },
      mazot: {
        selector: "td:nth-child(4)",
        type: "text",
        transform: (val: string) => parseFloat(val),
      },
    },
  },
};

export { schema };
