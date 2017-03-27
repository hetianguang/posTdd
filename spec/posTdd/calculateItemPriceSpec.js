describe("calculate price", () => {
    const calculateItemPrice = require('../../lib/posTdd/calculateItemPrice.js')

    it("should return calculate result when input orderInfo", () => {
        const itemPromotionInfo = {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00,
            count: 3,
            promotionType: "BUY_TWO_GET_ONE_FREE"
        }
        const expectResult = {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00,
            count: 3,
            promotionType: "BUY_TWO_GET_ONE_FREE",
            totalPrice: 6.00,
            savePrice: 3.00
        }

        expect(calculateItemPrice(itemPromotionInfo)).toEqual(expectResult)
    })

    it("should return calculate result when input orderInfo without promotion", () => {
        const itemInfo = {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50,
            count: 3
        }
        const expectResult1 = {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50,
            count: 3,
            totalPrice: 16.50,
            savePrice: 0
        }

        expect(calculateItemPrice(itemInfo)).toEqual(expectResult1)
    })
})