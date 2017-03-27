describe("count barcodes", () => {

    const countBarcodes = require("../../lib/posTdd/countBarcodes.js")

    it("should return count result input uncount barcodes", () => {

        const unCountBarcodes = [
            {
                barcode: 'ITEM000001',
                count: 1
            }, {
                barcode: 'ITEM000001',
                count: 2
            }
        ]

        expect(countBarcodes(unCountBarcodes)).toEqual([
            {
                barcode: "ITEM000001",
                count: 3
            }
        ])
    })
})