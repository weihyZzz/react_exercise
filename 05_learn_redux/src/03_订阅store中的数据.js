const store = require("./store")

const unsubscribe = store.subscribe(() => {
    console.log('监测到数据变化', store.getState());
})

store.dispatch({ type: "change_name", name: "weihy" })
store.dispatch({ type: "change_count", counter: 100 })

// 可以取消订阅，后续操作就不会继续监听
unsubscribe()
store.dispatch({ type: "change_name", name: "ustb" })
// console.log('手动监听', store.getState());