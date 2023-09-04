const { createStore } = require("redux")

// 初始化数据
const initState = {
    name: "weihy",
    counter: 10
}

// 定义reducer
function reducer() {
    return initState
}

// 创建store
const store = createStore(reducer)

module.exports = store