import React, { PureComponent } from "react";
import { Cart } from "./pages/Cart";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }
  loginClick() {
    localStorage.setItem("token", "weihy");
    // this.forceUpdate();
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.loginClick(e)}>登录</button>
        {/* {isLogin ? <Cart /> : <h2>请登录</h2>} */}
        <Cart />
      </div>
    );
  }
}

export default App;
