import React, { memo } from "react";
// import useUser from "./hooks/useUser";
import { useFetchContext, useScrollPosition } from "./hooks";
import "./style.css";
const App = memo(() => {
  //   const user = useFetchContext();
  const [user, theme] = useFetchContext();
  const [scrollX, scrollY] = useScrollPosition();
  useScrollPosition();
  return (
    <div className="app">
      <h2>
        UserContext: {user.name}-{user.school}
      </h2>
      <h2>
        ThemeContext: {theme.color}-{theme.size}
      </h2>

      <h2>
        Position: {scrollX}-{scrollY}
      </h2>
    </div>
  );
});

export default App;
