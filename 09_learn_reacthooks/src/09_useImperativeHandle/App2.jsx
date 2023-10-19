import React, { memo, useEffect, useRef } from "react";
import { forwardRef } from "react";

const Home = memo(
  forwardRef((props, ref) => {
    return (
      <div>
        <h3>Home组件</h3>
        <input type="text" ref={ref} />
      </div>
    );
  })
);

const App2 = memo(() => {
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef.current);
  }, []);
  return (
    <div>
      <h2>App2组件</h2>

      <Home ref={inputRef} />
    </div>
  );
});

export default App2;
