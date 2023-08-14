import React, { Component } from "react";
import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context";
export class HomeInfo extends Component {
  render() {
    // log打印出使用Context传递的数据
    console.log("context", this.context);
    return (
      <div>
        HomeInfo: {this.context.color}
        {/* // 多个context共享数据，采用consumer的方式来使用其余context的数据 */}
        <UserContext.Consumer>
          {(value) => {
            return <h2>usercontext数据:{value.nickname}</h2>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

// 3.设置组件的contextType为某一个具体的Context
HomeInfo.contextType = ThemeContext;
export default HomeInfo;
