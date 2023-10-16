import React, { memo, useId, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  const id = useId();
  console.log("id:", id);
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
