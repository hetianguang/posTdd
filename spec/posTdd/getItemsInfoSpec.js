describe("get items info", () => {

    const getItemsInfo = require("../../lib/posTdd/getItemsInfo.js")

    it("should return item object when input a item barcode", () => {
        const itemsBarcode = [{barcode: "ITEM000001", count: 2}]
        const itemsObject = [{barcode: 'ITEM000001',
                                 name: '雪碧',
                                 unit: '瓶',
                                 price: 3.00,
                                 count: 2}]

       expect(getItemsInfo(itemsBarcode)).toEqual(itemsObject)
    })
})