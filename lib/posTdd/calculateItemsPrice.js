'use strict'
const calculateItemPrice = require('./calculateItemPrice.js')
const calculateItemsPrice = allItemsInfo => {
    let result = []
    let totalPrice = 0
    let savePrice = 0
    for(let itemInfo of allItemsInfo) {
        let itemPrice = calculateItemPrice(itemInfo)
        result.push(itemPrice)
        totalPrice += itemPrice.totalPrice
        savePrice += itemPrice.savePrice
    }
    return {
        items: result,
        totalPrice: totalPrice,
        savePrice: savePrice
    }
}

module.exports = calculateItemsPrice