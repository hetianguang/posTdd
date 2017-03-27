"use strict"

const parseBarcode =  userBacodes => {
    let result = []
    for(let barcode of userBacodes){
        let barcodeInfo = barcode.split("-")
        result.push({
            barcode: barcodeInfo[0],
            count: barcodeInfo[1]? parseFloat(barcodeInfo[1]) : 1
        })
    }
    return result
} 

module.exports = parseBarcode