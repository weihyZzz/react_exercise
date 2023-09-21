import React, { memo, useContext } from "react";
import { ThemeContext, UserContext } from "./context";

const App = memo(() => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>
        name: {user.name} school: {user.school}
      </h2>
      <div style={{ fontSize: theme.size, color: theme.color }}>文字样式</div>
    </div>
  );
});

export default App;
