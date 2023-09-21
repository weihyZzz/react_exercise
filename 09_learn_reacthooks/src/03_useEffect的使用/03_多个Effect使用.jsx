import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    console.log("1.进行网络请求");
  });
  useEffect(() => {
    console.log("2.进行事件监听");
    return () => {
      // 取消事件监听
    };
  });
  useEffect(() => {
    console.log("3.执行数据处理逻辑");
  });
  return (
    <div>
      <h2>计数:{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
