const priceSchema = {
    schema: {
        tables: {
            selector: 'table.table-prices tr.price-row | array',
            schema: {
                ilce: 'td:nth-child(1)',
                vMax95: {
                    selector: 'td:nth-child(2)',
                    schema: {
                        value: 'span.with-tax',
                        valueWithoutTax: 'span.without-tax',
                    }
                },
                vMaxDiesel: {
                    selector: 'td:nth-child(3)',
                    schema: {
                        value: 'span.with-tax',
                        valueWithoutTax: 'span.without-tax',
                    }
                },
                vProDiesel: {
                    selector: 'td:nth-child(4)',
                    schema: {
                        value: 'span.with-tax',
                        valueWithoutTax: 'span.without-tax',
                    }
                },
                poGaz: {
                    selector: 'td:nth-child(5)',
                    schema: {
                        value: 'span.with-tax',
                        valueWithoutTax: 'span.without-tax',
                    }
                }
            }
        }
    }
}

export {
    priceSchema
}
