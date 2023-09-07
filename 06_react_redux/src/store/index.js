import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"

// trace:true用于开启redux-devtools中的trace功能
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;
// 创建store
// const store = createStore(reducer, applyMiddleware(thunk))
const store = createStore(reducer,  composeEnhancers(applyMiddleware(thunk)));
export default store