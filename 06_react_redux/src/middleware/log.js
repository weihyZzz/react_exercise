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

export default log