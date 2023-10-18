import React, { memo, useCallback, useRef, useState } from "react";

const Home = memo((props) => {
  const { increment } = props;
  console.log("Home render");
  return (
    <div>
      <button onClick={increment}>Home组件+1</button>
    </div>
  );
});
const App2 = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("hello ustb");
  const countRef = useRef();
  countRef.current = count;
  const increment = useCallback(function () {
    setCount(countRef.current + 1);
  }, []);
  //   const increment = useCallback(
  //     function () {
  //       setCount(count + 1);
  //     },
  //     [count]
  //   );

  //   const increment = () => setCount(count + 1);
  console.log("App render");
  return (
    <div>
      <h2>{count}</h2>
      <h2>message: {message}</h2>
      <Home increment={increment} />
      <button onClick={(e) => setMessage(Math.random())}>change Message</button>
    </div>
  );
});

export default App2;
