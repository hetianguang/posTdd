'use strict'

const allInfo = require("../../Spec/test/fixtures")
const getPromotions = itemsInfo => {
    let resultItemsPromotionInfo = itemsInfo
    let allPromotions = allInfo.loadPromotions()
    // for(let item of resultItemsPromotionInfo) {
    //     for(let promotion of allPromotions) {
    //       if(promotion.barcodes.indexOf(item.barcode) !== -1) {
    //          item.promotionType = promotion.type
    //           break
    //        }
    //     }
    // }
    let result = itemsInfo.map(item => {
        let promotion = allPromotions.find(promotion => promotion.barcodes.indexOf(item.barcode) !== -1 )
        return promotion ? Object.assign(item,{"promotionType":promotion.type}) : item
    })
    console.log(result)
    return result
}

module.exports = getPromotions