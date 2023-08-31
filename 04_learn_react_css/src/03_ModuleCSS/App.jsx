import React, { PureComponent } from "react";
import appStyle from "./App.module.css";
import Profile from "./profile/Profile";
import Home from "./home/Home";
export class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 普通css方式编写，App中的title会和profile中的title样式层叠 */}
        <h2 className={appStyle.title}>我是标题 (标题样式是红色)</h2>
        <p className={appStyle.content}>我是内容</p>
        <Profile />
        <Home />
      </div>
    );
  }
}

export default App;
