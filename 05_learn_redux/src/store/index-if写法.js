const { createStore } = require("redux")

// 初始化数据
const initState = {
    name: "weihy",
    counter: 10
}

// 定义reducer
// 两个参数
// state: store中目前保存的state
// action: 本次需要进行更新的action(dispatch传入的action)
// 函数返回值：作为store之后存储的state
function reducer(state = initState, action) {
    // 如果action类型为修改名字，则对应执行
    if (action.type === "change_name") {
        return { ...state, name: action.name }
    } else if (action.type === "change_count") {
        return { ...state, counter: action.counter }
    }
    return state
}

// 创建store
const store = createStore(reducer)

module.exports = store