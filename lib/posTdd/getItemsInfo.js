'use strict'
const allInfo = require("../../Spec/test/fixtures")
const getItemInfo = itemsBarcode => {

    let result = []
    let allItems = allInfo.loadAllItems()

    for(let barcode of itemsBarcode) {
        for(let bc of allItems) {
            if(bc.barcode === barcode.barcode){
                result.push({
                    barcode: bc.barcode,
                       name: bc.name,
                       unit: bc.unit,
                      price: bc.price,
                      count: barcode.count
                })
            }
        }
    }
    return result
}

module.exports = getItemInfo