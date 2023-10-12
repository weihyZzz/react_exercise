import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./modules/counter"
const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default store