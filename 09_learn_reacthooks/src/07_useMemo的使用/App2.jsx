import React, { memo, useState } from "react";

function calcNumTotal(num) {
  console.log("calcNumTotal过程调用");
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

const App2 = memo(() => {
  const [count, setCount] = useState(0);
  const result = calcNumTotal(50);
  return (
    <div>
      <h2>count: {count}</h2>
      <h2>result: {result}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App2;
