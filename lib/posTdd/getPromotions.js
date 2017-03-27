'use strict'

const allInfo = require("../../Spec/test/fixtures")
const getPromotions = itemsInfo => {
    let resultItemsPromotionInfo = itemsInfo
    let allPromotions = allInfo.loadPromotions()
    for(let item of resultItemsPromotionInfo) {
        for(let promotion of allPromotions) {
          if(promotion.barcodes.indexOf(item.barcode) !== -1) {
             item.promotionType = promotion.type
              break
           }
        }
    }
    return resultItemsPromotionInfo
}

module.exports = getPromotions