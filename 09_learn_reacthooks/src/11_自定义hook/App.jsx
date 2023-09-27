import React, { memo, useEffect, useState } from "react";

// 封装自定义hook，用于log组件生命周期
function useLog() {
  useEffect(() => {
    console.log("组件被创建");
    return () => {
      console.log("组件被销毁");
    };
  });
}
const About = memo(() => {
  useLog();
  return <h2>About Page</h2>;
});
const Home = memo(() => {
  useLog();
  return <h2>Home Page</h2>;
});
const App = memo(() => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={(e) => setIsShow(!isShow)}>切换</button>

      {isShow && <About />}
      {isShow && <Home />}
    </div>
  );
});

export default App;
