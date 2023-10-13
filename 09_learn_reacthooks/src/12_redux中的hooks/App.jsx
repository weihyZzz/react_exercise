import React, { memo } from "react";

import { incrementAction, decrementAction } from "./store/modules/counter";
import { useDispatch, useSelector } from "react-redux";
const Home = memo((props) => {
  const { message } = useSelector((state) => ({
    message: state.counter.message,
  }));
  console.log("Home render");
  return (
    <div>
      <h2>Home message:{message}</h2>
    </div>
  );
});
const App = memo((props) => {
  // 获取redux store中的数据
  const { count } = useSelector((state) => ({
    count: state.counter.count,
  }));

  const dispatch = useDispatch();
  function handleCount(num, isAdd) {
    if (isAdd) {
      dispatch(incrementAction(num));
    } else dispatch(decrementAction(num));
  }
  console.log("App render");
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={(e) => handleCount(1, true)}>+1</button>
      <button onClick={(e) => handleCount(10, false)}>-10</button>
      <Home />
    </div>
  );
});
export default App;
