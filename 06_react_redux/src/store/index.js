import { createStore, combineReducers } from "redux"

import counterReducer from "./counter"
import netdataReducer from "./netdata"
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


// 模拟日志中间件
function log(store) {
    // 记录旧dispatch
    const next = store.dispatch
    
    function logAndDispatch(action) {
        console.log('当前派发action', action);
        // 真正进行action派发（使用旧dispatch）
        next(action)
        console.log('派发之后的结果', store.getState());
    }
    
    // monkey patch
    store.dispatch = logAndDispatch
}
log(store)

// 手写实现thunk逻辑,支持派发函数类型的action
function diyThunk(store) {
    const next = store.dispatch
    function dispatchThunk(action) {
        if (typeof action === "function") {
            action(store.dispatch, store.getState)
        } else {
            next(action)
        }
    }
    store.dispatch = dispatchThunk
}
diyThunk(store)

export default store