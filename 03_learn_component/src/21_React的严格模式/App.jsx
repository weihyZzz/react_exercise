import React, { PureComponent, StrictMode } from "react";
import Home from "./Home";
import Profile from "./Profile";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    );
  }
}

export default App;
