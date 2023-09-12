// 生成action

import * as actionTypes from "./constants"
import axios from "axios"

const url =
  "https://www.fastmock.site/mock/1c5e8f3cc0c26cb2cac70e4c6541c965/cms";

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

export const changeUserAction = (user) => {
    return {
        type: actionTypes.CHANGE_USER,
        user
    }
}

export const fetchGoodsAction = () => {
    function getGoodsData(dispatch) {
        // 执行异步操作，网络请求
        const path = url + '/goods/list'
        axios.post(path).then((res) => {
            console.log("商品列表", res.data.data.list);

            const goods = res.data.data.list;
            dispatch(changeGoodsAction(goods))
        })
    }
    // 通过中间件，action也可以返回函数，不然只能返回普通对象
    return getGoodsData
}

// 用户列表/users/list，post请求
export const fetchUserAction = () => {
    function getUserData(dispatch) {
        // 进行网络请求
        const path = url + '/users/list'
        axios.post(path).then((res) => {
            console.log('用户信息', res.data.data.list);
            const user = res.data.data.list
            dispatch(changeUserAction(user))
        })
    }
    return getUserData
}
