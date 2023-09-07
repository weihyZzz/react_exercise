// 生成action

import * as actionTypes from "./constants"

export const addNumberAction = (num) => {
    return {
        type: actionTypes.ADD_NUMBER,
        num
    }
}
export const subNumberAction = (num) => {
    return {
        type: actionTypes.SUB_NUMBER,
        num
    }
}
export const changeGoodsAction = (goods) => {
    return {
        type: actionTypes.CHANGE_GODDS,
        goods
    }
}