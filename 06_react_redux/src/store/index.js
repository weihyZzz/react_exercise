import { createStore, combineReducers } from "redux"

import counterReducer from "./counter"
import netdataReducer from "./netdata"


import { log, diyThunk, diyapplyMiddleware } from "../middleware"
// import thunk from "redux-thunk"


// 将模块reducer合并
const reducer = combineReducers({
    counter: counterReducer,
    netdata: netdataReducer
})



// redux-devtools配置相关
// trace:true用于开启redux-devtools中的trace功能

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;


// 创建store

// 应用官方的thunk
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const store = createStore(reducer);

// 使用自定义的applyMiddleware调用
diyapplyMiddleware(store, log, diyThunk)

// 直接调用
// log(store)
// diyThunk(store)

export default store