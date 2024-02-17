const schema = {
  sonYenileme: {
    fill: new Date().toUTCString(),
  },
  fiyatlar: {
    selector: "table .sub_table tbody tr",
    type: "array",
    schema: {
      il: "td:nth-child(1)",
      benzin: {
        selector: "td:nth-child(2)",
        transform: (val: any) => parseFloat(val.replace(",", ".")),
      },
      motorin: {
        selector: "td:nth-child(3)",
        transform: (val: any) => parseFloat(val.replace(",", ".")),
      },
      motorinEuro: {
        selector: "td:nth-child(4)",
        transform: (val: any) => parseFloat(val.replace(",", ".")),
      },
      lpg: {
        selector: "td:nth-child(5)",
        transform: (val: any) => parseFloat(val.replace(",", ".")),
      },
    },
  },
};

export { schema };
