import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10
    },
    reducers: {
        incrementAction(state, { payload }) {
            state.count = state.count + payload
        },
        decrementAction(state, { payload }) {
            state.count = state.count - payload
        }
    }
})
export default counterSlice.reducer
export const { incrementAction, decrementAction } = counterSlice.actions