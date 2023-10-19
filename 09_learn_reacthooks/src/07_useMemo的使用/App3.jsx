import React, { memo, useMemo, useState } from "react";

const Home = memo((props) => {
  const { name, school } = props.infoObj;
  console.log("Home render");
  return (
    <div>
      Home Info {name}={school}
    </div>
  );
});

const App3 = memo(() => {
  const [count, setCount] = useState(0);
  //   const infoObj = { name: "weihy", school: "ustb" };
  const infoObj = useMemo(() => {
    return { name: "weihy", school: "ustb" };
  }, []);
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <Home infoObj={infoObj} />
    </div>
  );
});

export default App3;
