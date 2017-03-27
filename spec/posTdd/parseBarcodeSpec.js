describe("parse barcode", () => {

    it("should return a barcode when input a barcode", () => {
        const parseBarcode = require("../../lib/posTdd/parseBarcode.js")

        const userBarcodes = ["ITEM000001"]
        
        expect(parseBarcode(userBarcodes)).toEqual([{
            barcode: "ITEM000001",
            count: 1}])
    })

    it("should return count of barcode when input barcode include -", () => {
        const parseBarcode = require("../../lib/posTdd/parseBarcode.js")

        const userBarcodes = ["ITEM000002-3"]

        expect(parseBarcode(userBarcodes)).toEqual([{
            barcode: "ITEM000002",
            count: 3
        }])
    })
})