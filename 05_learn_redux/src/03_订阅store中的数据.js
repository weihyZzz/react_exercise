const store = require("./store")
const { changeCountAction,changeNameAction } = require("./store/actionCreators")
const unsubscribe = store.subscribe(() => {
    console.log('监测到数据变化', store.getState());
})

store.dispatch(changeCountAction(100))
store.dispatch(changeNameAction("weihy2"))
store.dispatch(changeNameAction("weihy3"))
store.dispatch(changeNameAction("weihy4"))
store.dispatch(changeNameAction("weihy5"))
// 可以取消订阅，后续操作就不会继续监听
unsubscribe()
store.dispatch({ type: "change_name", name: "ustb" })
console.log('手动监听', store.getState());