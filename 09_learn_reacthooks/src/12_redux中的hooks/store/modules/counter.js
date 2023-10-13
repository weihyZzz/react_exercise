import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
    message: "hello ustb",
  },
  reducers: {
    incrementAction(state, { payload }) {
      state.count = state.count + payload;
    },
    decrementAction(state, { payload }) {
      state.count = state.count - payload;
    },
    changeMessageAction(state, { payload }) {
      state.message = payload;
    },
  },
});
export default counterSlice.reducer;
export const { incrementAction, decrementAction, changeMessageAction } =
  counterSlice.actions;
