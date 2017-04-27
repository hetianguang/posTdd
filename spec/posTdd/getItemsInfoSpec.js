describe("get items info", () => {

    const getItemsInfo = require("../../lib/posTdd/getItemsInfo.js")

    it("should return item object when input a item barcode", () => {
        const itemsBarcode = [
            {
                barcode: "ITEM000001",
                count: 2
            },
            {
                barcode: "ITEM000000",
                count: 3
            },
        ]
        const expectResult = [
            {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00,
                count: 2
            },
            {
                barcode: 'ITEM000000',
                name: '可口可乐',
                unit: '瓶',
                price: 3.00,
                count:3
            }
        ]

        expect(getItemsInfo(itemsBarcode)).toEqual(expectResult)
    })
})