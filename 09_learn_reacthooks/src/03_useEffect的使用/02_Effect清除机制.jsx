import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("监听redux数据变化");
    // Effect返回值：回调函数=>组件重新渲染或组件卸载时执行
    return () => {
      console.log("取消redux中数据监听");
    };
  });
  return (
    <div>
      <h3>计数:{count}</h3>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
