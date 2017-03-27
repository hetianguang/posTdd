describe("calculate price", () => {
    const calculatePrice = require('../../lib/posTdd/calculatePrice.js')

    it("should return calculate result when input orderInfo", () => {
        const itemsPromotionInfo = [
            {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00,
                count: 3,
                promotionType: "BUY_TWO_GET_ONE_FREE"
            }, {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.50,
                count: 2,
                promotionType: "BUY_TWO_GET_ONE_FREE"
            }
        ]
        const resultPrice = {
            totalPrice: 10.5,
            reduce: 7.5,
            calculate: [
                {
                    barcode: 'ITEM000001',
                    name: '雪碧',
                    unit: '袋',
                    price: 3.00,
                    count: 3,
                    totalPrice: 6.00,
                    reduce: 3.00
                }, {
                    barcode: 'ITEM000005',
                    name: '方便面',
                    unit: '袋',
                    price: 4.50,
                    count: 2,
                    totalPrice: 4.5,
                    reduce: 4.5
                }
            ]
        }
    })
})