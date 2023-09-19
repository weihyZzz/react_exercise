import React, { PureComponent } from "react";
import CountClass from "./CountClass";
import CountHook from "./CountHook";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>计数器案例</h2>
        <CountClass />
        <CountHook />
      </div>
    );
  }
}

export default App;
