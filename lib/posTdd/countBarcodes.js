'use strict'
const parseBarcode = require('./parseBarcode.js')

const countBarcodes = unCountBarcodes => {
    let barcodesCount = []
    for (let barcode of unCountBarcodes) {
        // let barcodefouned = findBarcode(barcode, barcodesCount)
        let barcodefouned = barcodesCount.find(barcodeCount => barcodeCount.barcode === barcode.barcode);
        console.log(barcodefouned)
        if (barcodefouned !== undefined) {
            barcodefouned.count += barcode.count
        } else {
            barcodesCount.push(barcode)
        }
    }
    return barcodesCount
}

const findBarcode = (barcode, barcodesCount) => {
    for (let bc of barcodesCount) {
        if (barcode.barcode === bc.barcode) {
            return bc
        }
    }
    return null
}

module.exports = countBarcodes