import React, { PureComponent } from "react";
import "./App.css";
import Profile from "./profile/Profile";
export class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 普通css方式编写，App中的title会和profile中的title样式层叠 */}
        <h2 className="title">我是标题 (标题样式是红色)</h2>
        <p className="content">我是内容</p>
        <Profile />
      </div>
    );
  }
}

export default App;
