// 存储网络请求的相关数据的redux模块
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const url =
  "https://www.fastmock.site/mock/1c5e8f3cc0c26cb2cac70e4c6541c965/cms";


// 凭借extraReducers处理异步操作的写法
export const fetchHomeMultidataAction = createAsyncThunk("fetch/homemultidata", async () => {
    const path = url + '/goods/list'
    const res = await axios.post(path)
    console.log('fetchHomeMultidataAction请求数据,', res);
    return res.data.data.list
})
// 不凭借extraReducers处理异步操作的写法
export const fetchUserDataAction = createAsyncThunk("fetct/userdata", async (extraInfo, { dispatch, getState }) => {
    // 直接在action内部派发dispatch
    const path = url + '/users/list'
    const res = await axios.post(path)
    console.log('fetchUserDataAction请求数据', res);
    const users = res.data.data.list
    dispatch(changeUsers(users))
    
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
    // extraReducers写法一：
    // extraReducers: {
    //     [fetchHomeMultidataAction.pending](state, action) {
    //         console.log('fetchHomeMultidataAction pending状态');
    //     },
    //     [fetchHomeMultidataAction.fulfilled](state, action) {
    //         state.goods = action.payload
    //     }
    // }


    // extraReducers写法二:
    extraReducers: (builder) => {
        builder.addCase(fetchHomeMultidataAction.pending, (state, action) => {
            console.log('fetchHomeMultidataAction pendng状态');
        }).addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
            console.log('fetchHomeMultidataAction fulfilled状态');
            state.goods = payload
        })
    }
})

export const { changeGoods, changeUsers } = homeSlice.actions
export default homeSlice.reducer