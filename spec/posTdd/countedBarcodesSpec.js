describe("count barcodes", () => {

    const countedBarcodes = require("../../lib/posTdd/countedBarcodes.js")

    it("should return 2-words when input two same barcode", () => {

        const barcodes = ['ITEM000001','ITEM000001',]

        expect(countedBarcodes(barcodes)).toEqual([{
            barcode: "ITEM000001",
            count: 2
        }])
    })

    it("should return resultObject when input two same barcode", () => {

        const barcodes = ['ITEM000001','ITEM000001','ITEM000002-2','ITEM000002']

        const resultObject = [{barcode: "ITEM000001", count: 2},{barcode: "ITEM000002", count: 3}]
        expect(countedBarcodes(barcodes)).toEqual(resultObject)
    })
})