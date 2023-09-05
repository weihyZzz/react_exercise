const store = require("./store")

console.log(store.getState());

const nameAction = { type: "change_name", name: "ustb" }
const countAction = { type: "change_count", counter: 100 }
// 派发nameAction
store.dispatch(nameAction)
// 查看修改后的数据
console.log(store.getState());

// 派发countAction
store.dispatch(countAction)
console.log(store.getState());
