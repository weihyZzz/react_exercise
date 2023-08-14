import React, { Component } from "react";
import NavBar from "./TabControl/index";
import NavBarV2 from "./TabControlV2";

export class App extends Component {
  render() {
    return (
      <div>
        {/* 采用props.children的方式实现插槽 */}
        <NavBar>
          <span>left</span>
          <input type="text" />
          <button>right</button>
        </NavBar>
        {/* 采取props直接传参数的方式实现插槽 */}
        <NavBarV2
          leftSlot={<button>left</button>}
          centerSlot={<i>center</i>}
          rightSlot={<span>right</span>}
        ></NavBarV2>
      </div>
    );
  }
}

export default App;
