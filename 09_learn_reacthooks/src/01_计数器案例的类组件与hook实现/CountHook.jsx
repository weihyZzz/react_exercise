import { useState } from "react";
// --------------不可以在普通函数中使用hook----------------
// function usualFn() {
//   const [count] = useState(66);
// }

function CountHook() {
  const [count, setCount] = useState(66);
  return (
    <div>
      <h3>hook计数:{count}</h3>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default CountHook;
