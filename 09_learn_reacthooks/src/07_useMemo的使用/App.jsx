import React, { memo, useMemo, useState } from "react";

// Home组件: 演示“向子组件传递相同内容的对象时，使用useMemo进行优化”
const Home = memo(function (props) {
  const info = props.info;
  console.log("Home组件渲染");
  return (
    <div>
      <h2>
        Home-{info.name}-{info.age}
      </h2>
    </div>
  );
});
function calcNumTotal(num) {
  console.log("calcNumTotal过程调用");
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}
const App = memo(() => {
  const [message, setMessage] = useState("hello");
  //   const result = calcNumTotal(50);
  //   避免每次渲染都重新执行大量计算
  const result = useMemo(() => {
    return calcNumTotal(50);
  }, []);

  //   const info = { name: "weihy", age: "20" };
  //   为子组件传递相同内容对象时，采用useMemo进行优化
  const info = useMemo(() => {
    return { name: "weihy", age: "20" };
  }, []);
  return (
    <div>
      {/* 执行大量计算操作时，是否需要每次渲染都重新计算？ */}
      <h2>计算结果:{result}</h2>
      <h2>message:{message}</h2>
      <button onClick={(e) => setMessage(new Date().getTime())}>
        修改message
      </button>

      <Home info={info} />
    </div>
  );
});

export default App;
