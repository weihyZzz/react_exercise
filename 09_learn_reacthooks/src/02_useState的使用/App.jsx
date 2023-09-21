import React, { memo, useState } from "react";

const App = memo(() => {
  const [message, setMessage] = useState("hello world");
  return (
    <div>
      <h2>message: {message}</h2>
      <button onClick={(e) => setMessage("ustb")}>修改message</button>
    </div>
  );
});

export default App;
