import React, { forwardRef, memo, useImperativeHandle, useRef } from "react";

const HelloWorld = memo(
  forwardRef((props, ref) => {
    const inputRef = useRef();
    // 定义在组件外部可访问的实例值或方法，并将它们暴露给父组件或外部代码
    useImperativeHandle(ref, () => {
      return {
        // 返回的obj就是传入ref的current
        focus() {
          inputRef.current.focus();
        },
        setValue(value) {
          inputRef.current.value = value;
        },
      };
    });
    return <input type="text" ref={inputRef} />;
  })
);
const App = memo(() => {
  const inputRef = useRef();

  function handleDOM() {
    // console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.setValue("123");
  }
  return (
    <div>
      <h2>标题</h2>

      <HelloWorld ref={inputRef} />
      <button onClick={handleDOM}>获取input</button>
    </div>
  );
});

export default App;
