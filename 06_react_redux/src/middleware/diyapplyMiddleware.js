function diyapplyMiddleware(store, ...fns) {
    // 传入store，并依次执行中间件
    fns.forEach(fn => {
        fn(store)
    })
}

export default diyapplyMiddleware