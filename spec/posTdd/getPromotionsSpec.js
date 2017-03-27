describe("get promotions", () => {
    const getPromotions = require('../../lib/posTdd/getPromotions.js')

    it("should success add a promotion info", () => {
        const itemsInfo = [
            {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00,
                count: 2
            }
        ]

        expect(getPromotions(itemsInfo)[0].promotionType === "BUY_TWO_GET_ONE_FREE").toEqual(true)
    })

    it("should return undefined when have not promotion", () => {
        const itemsInfo = [
            {
                barcode: 'ITEM000002',
                name: '苹果',
                unit: '斤',
                price: 5.50,
                count: 2
            }
        ]

        expect(getPromotions(itemsInfo)[0].promotionType).toEqual(undefined)
    })
})