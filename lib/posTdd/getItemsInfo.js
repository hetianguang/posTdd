'use strict'
const allInfo = require("../../Spec/test/fixtures")
const getItemInfo = itemsBarcode => {

    let allItems = allInfo.loadAllItems()
    let result = itemsBarcode.map(barcode => {let bc = allItems.find(bc => bc.barcode === barcode.barcode) 
       return  bc ? Object.assign(bc,barcode) : ""})

    return result
}
module.exports = getItemInfo