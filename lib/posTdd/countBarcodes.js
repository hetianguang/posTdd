'use strict'
const parseBarcode = require('./parseBarcode.js')

const countBarcodes = unCountBarcodes => {
    let barcodesCount = []
    unCountBarcodes.forEach(barcode => {
        let barcodefouned = barcodesCount.find(barcodeCount => barcodeCount.barcode === barcode.barcode);
        barcodefouned !== undefined ? barcodefouned.count += barcode.count : barcodesCount.push(barcode)
    })
    return barcodesCount
}
module.exports = countBarcodes