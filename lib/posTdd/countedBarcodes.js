'use strict'
const parseBarcode = require('./parseBarcode.js')

const countedBarcodes = barcodes =>{
    let barcodesCount = []
    let uncountBarcodes = parseBarcode(barcodes)
    for(let barcode of uncountBarcodes) {
        let barcodefouned = findBarcode(barcode,barcodesCount)
        if(barcodefouned !== null){
            barcodefouned.count += barcode.count
        }else {
            barcodesCount.push(barcode)
        }
    }
    return barcodesCount
}

const findBarcode = (barcode,barcodesCount) => {
    for(let bc of barcodesCount) {
        if(barcode.barcode === bc.barcode){
            return bc
        }
    }
    return null
}

module.exports = countedBarcodes