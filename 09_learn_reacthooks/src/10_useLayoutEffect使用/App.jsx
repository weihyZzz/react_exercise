import React, { memo, useState, useLayoutEffect, useEffect } from "react";

const App = memo(() => {
  const [count, setCount] = useState(10);
  //   在count渲染到屏幕前，发现count为0则进行修改
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 10);
    }
  }, [count]);
  //   useEffect(() => {
  //     if (count === 0) {
  //       setCount(Math.random() + 10);
  //     }
  //   }, [count]);
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={(e) => setCount(0)}>设置count</button>
    </div>
  );
});

export default App;
