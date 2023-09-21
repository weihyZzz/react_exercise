import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  //   依赖数组是空的，所以它相当于 componentDidMount。
  useEffect(() => {
    console.log("Component is Mounted");
  }, []);
  //   函数在 count 发生变化时执行，模拟了 componentDidUpdate 的行为。
  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  useEffect(() => {
    console.log("发起网络请求");
    return () => {
      console.log("组件被卸载时，执行一次");
    };
  }, []);
  return (
    <div>
      <h2>计数:{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
