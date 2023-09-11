// 存储网络请求的相关数据的redux模块
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const url =
  "https://www.fastmock.site/mock/1c5e8f3cc0c26cb2cac70e4c6541c965/cms";

export const fetchHomeMultidataAction = createAsyncThunk("fetch/homemultidata", async () => {
    const path = url + '/goods/list'
    const res = await axios.post(path)
    console.log('fetchHomeMultidataAction请求数据,', res);
    return res.data.data.list
})
const homeSlice = createSlice({
    name: "home",
    initialState: {
        // 商品数据和用户数据
        goods: [],
        users: []
    },
    reducers: {
        changeGoods(state, { payload }) {
            state.goods = payload
        },
        changeUsers(state, { payload }) {
            state.users = payload
        }
    },
    extraReducers: {
        [fetchHomeMultidataAction.pending](state, action) {
            console.log('fetchHomeMultidataAction pending状态');
        },
        [fetchHomeMultidataAction.fulfilled](state, action) {
            state.goods = action.payload
        }
    }

})

export const { changeGoods, changeUsers } = homeSlice.actions
export default homeSlice.reducer