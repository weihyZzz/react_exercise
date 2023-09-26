import React, { memo, useCallback, useRef, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(1);

  // 1.用法一：通过useRef来绑定DOM
  const titleRef = useRef();
  const inputRef = useRef();
  function showTitleDom() {
    console.log(titleRef.current);
  }
  function getInput() {
    inputRef.current.focus();
  }

  //   2.用法二：解决闭包陷阱
  // 闭包陷阱的来源是内部函数继续引用外部函数的变量，
  // 如果外部函数之后修改了这些变量，内部函数仍然会使用旧的引用，而不是最新的值

  //   const increment = useCallback(() => {
  //     console.log("increment");
  //     setCount(count + 1);
  //   }, []);

  //   通过useRef创建一个不变对象，来存放count，即使依赖数组为空也可以实现正常+1
  const countRef = useRef();
  countRef.current = count;
  const increment = useCallback(() => {
    console.log("increment");
    setCount(countRef.current + 1);
  }, []);
  return (
    <div>
      <h2>count: {count}</h2>
      <h2 ref={titleRef}>标题</h2>
      <input type="text" ref={inputRef} />
      <button onClick={(e) => showTitleDom()}>查看标题dom</button>
      <button onClick={(e) => getInput()}>获取文本框焦点</button>

      {/* 通过useRef解决闭包陷阱 */}
      <button onClick={(e) => increment()}>+1</button>
    </div>
  );
});

export default App;
