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
        motorin_dizel: {
          selector: "td:nth-child(3)",
          transform: (val: any) => parseFloat(val.replace(",", ".")),
        },
        motorin_optimum_dizel: {
          selector: "td:nth-child(4)",
          transform: (val: any) => parseFloat(val.replace(",", ".")),
        },
        kalorifer_yakiti: {
          selector: "td:nth-child(5)",
          transform: (val: any) => parseFloat(val.replace(",", ".")),
        },
        fuel_oil: {
          selector: "td:nth-child(6)",
          transform: (val: any) => parseFloat(val.replace(",", ".")),
        },
      },
    },
  },
};

export { schema };
