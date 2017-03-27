describe("calculate  total price", () => {
    const calculateItemsPrice = require('../../lib/posTdd/calculateItemsPrice.js')

    it("should return calculate result of all items when input orderInfo", () => {
        const allItemsInfo = [{
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00,
            count: 3,
            promotionType: "BUY_TWO_GET_ONE_FREE"
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50,
            count: 3
        }]
        const expectResult ={ items: [{
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00,
            count: 3,
            promotionType: "BUY_TWO_GET_ONE_FREE",
            totalPrice: 6.00,
            savePrice: 3.00
        },{
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50,
            count: 3,
            totalPrice: 16.50,
            savePrice: 0
        }],
        totalPrice: 22.50,
        savePrice: 3
        }

        expect(calculateItemsPrice(allItemsInfo)).toEqual(expectResult)
    })
})