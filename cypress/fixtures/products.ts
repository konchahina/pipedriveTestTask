import Utils from "../utils"

const utils = new Utils()

export const products = {
    product1: {
        name: utils.generateRandomString(10),
        product_code: 'P1',
        category: 'Category 1',
        unit: 'Box',
        billing_frequency: 'Monthly',
        unit_price: '100',
        currency: { 
            name: 'US Dollar (USD)',
            name_no_code: 'US Dollar',
            code: 'USD',
            symbol: '$',
        },
        tax: '22',
    },
}
