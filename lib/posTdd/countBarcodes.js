'use strict'
const parseBarcode = require('./parseBarcode.js')

const countBarcodes = unCountBarcodes => {
    let barcodesCount = []
    for (let barcode of unCountBarcodes) {
        let barcodefouned = findBarcode(barcode, barcodesCount)
        if (barcodefouned !== null) {
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