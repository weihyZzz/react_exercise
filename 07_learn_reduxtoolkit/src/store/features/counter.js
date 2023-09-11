import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 255
    },
    reducers: {
        
        addNumber(state, { payload }) {
            // payload是解构action中的元素，
            // 在rtk下，不需要return state,对state进行修改就会默认进行return操作
            state.counter += payload
        },
        subNumber(state, action) {
            const payload = action.payload
            state.counter -= payload
        }
    }
})
// 导出action
export const { addNumber, subNumber } = counterSlice.actions
export default counterSlice.reducer