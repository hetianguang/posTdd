
const parseBarcode = require('./parseBarcode.js')
const countBarcodes = require('./countBarcodes.js')
const getItemsInfo = require('./getItemsInfo.js')
const getPromotions = require('./getPromotions.js')
const calculateItemsPrice = require('./calculateItemsPrice.js')
const printReceipt = userBarcodes => {
    let parseResult = parseBarcode(userBarcodes)
    let countResult = countBarcodes(parseResult)
    let itemsInfo = getItemsInfo(countResult)
    let itemsPromotionInfo = getPromotions(itemsInfo)
    let itemsCalculateResult = calculateItemsPrice(itemsPromotionInfo)
    console.log(itemsCalculateResult)

}
module.exports = printReceipt