'use strict'

const calculateItemPrice = itemPromotionInfo => {
    
    let calculateResult = itemPromotionInfo
    if(itemPromotionInfo.promotionType === "BUY_TWO_GET_ONE_FREE") {
        if(itemPromotionInfo.count > 2) {
            calculateResult.totalPrice = (itemPromotionInfo.count - 1) * itemPromotionInfo.price
            calculateResult.savePrice = itemPromotionInfo.price
        }else {
            calculateResult.totalPrice = itemPromotionInfo.count * itemPromotionInfo.price
            calculateResult.savePrice = 0
        }
    }else {
        calculateResult.totalPrice = itemPromotionInfo.count * itemPromotionInfo.price
        calculateResult.savePrice = 0
    }
   return calculateResult
}
module.exports = calculateItemPrice