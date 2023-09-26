import React, { memo, useCallback, useRef, useState } from "react";

// useCallback使用
// 1.准备将一个函数传递给子组件，最好使用useCallback进行优化，将优化后的函数传递给子组件

// 当props中属性发生改变时，组件本身会被重新渲染
const Home = memo(function (props) {
  // Home页面
  const { increment } = props;
  console.log("Home页面被渲染");
  return (
    <div>
      <button onClick={increment}>Home+1</button>
    </div>
  );
});
const App = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("hello world");
  // 普通increment
  // const increment = () => {
  //   setCount(count + 1);
  // };

  // useCallback优化后的increment
  // const increment = useCallback(
  //   function foo() {
  //     console.log("increment");
  //     setCount(count + 1);
  //   },
  //   [count]
  // );

  // 进一步优化：useRef 组件多次渲染，返回的是同一个值
  const countRef = useRef();
  countRef.current = count;
  const increment = useCallback(function foo() {
    console.log("increment");
    setCount(countRef.current + 1);
  }, []);
  return (
    <div>
      <h2>计数:{count}</h2>
      <button onClick={increment}>+1</button>
      <Home increment={increment} />

      <h2>message: {message}</h2>
      <button onClick={(e) => setMessage(new Date().getTime())}>
        修改message
      </button>
    </div>
  );
});

export default App;
