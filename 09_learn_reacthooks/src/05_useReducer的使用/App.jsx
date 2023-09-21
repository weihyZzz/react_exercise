import React, { memo, useReducer } from "react";

// useReducer 更适合处理复杂状态逻辑和多步操作
function reduer(state, action) {
  switch (action.type) {
    case "increment":
      return state < action.max ? state + 1 : action.min;
    default:
      return state;
  }
}
const App = memo(() => {
  // 初始值设置为5
  const [count, dispatch] = useReducer(reduer, 5);
  return (
    <div>
      <h2>点击{count}次</h2>
      <button onClick={(e) => dispatch({ type: "increment", max: 10, min: 1 })}>
        点击
      </button>
    </div>
  );
});

export default App;
