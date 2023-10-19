import React, { forwardRef, memo, useImperativeHandle, useRef } from "react";

const Home = memo(
  forwardRef((props, ref) => {
    const textRef = useRef();
    useImperativeHandle(ref, () => {
      // 暴露给父组件的操作，全放在这个对象里
      return {
        focus() {
          textRef.current.focus();
        },
        changeContent() {
          textRef.current.value = Math.random();
        },
      };
    });
    return (
      <div>
        <h2>Home组件</h2>
        <input type="text" ref={textRef} />
      </div>
    );
  })
);

const App3 = memo(() => {
  const inputRef = useRef();
  console.log(inputRef.current);
  function handleFocus() {
    inputRef.current.focus();
  }
  function handleContent() {
    inputRef.current.changeContent();
  }
  return (
    <div>
      <h2>App组件</h2>
      <Home ref={inputRef} />
      <button onClick={(e) => handleFocus()}>文本框聚焦</button>
      <button onClick={(e) => handleContent()}>修改文本框内容</button>
    </div>
  );
});

export default App3;
