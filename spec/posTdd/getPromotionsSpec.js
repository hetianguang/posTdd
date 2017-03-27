describe("get promotions", () => {
    const getPromotions = require('../../lib/posTdd/getPromotions.js')

    it("should success add a promotion indo", () => {
        const itemsInfo = [{barcode: 'ITEM000001',
                                 name: '雪碧',
                                 unit: '瓶',
                                 price: 3.00,
                                 count: 2}]
        const itemsPromotionInfo = [{barcode: 'ITEM000001',
                                 name: '雪碧',
                                 unit: '瓶',
                                 price: 3.00,
                                 count: 2,
                                 promotionType: "BUY_TWO_GET_ONE_FREE"}]
        
        expect(getPromotions(itemsInfo)).toEqual(itemsPromotionInfo)
    })
})