import { createStore, applyMiddleware, compose, combineReducers } from "redux"

import counterReducer from "./counter"
import netdataReducer from "./netdata"
import thunk from "redux-thunk"


// 将模块reducer合并
const reducer = combineReducers({
    counter: counterReducer,
    netdata: netdataReducer
})



// redux-devtools配置相关
// trace:true用于开启redux-devtools中的trace功能
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;


// 创建store
// const store = createStore(reducer, applyMiddleware(thunk))
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store