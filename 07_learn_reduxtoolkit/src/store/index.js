import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter"
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
export default store