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


export default store