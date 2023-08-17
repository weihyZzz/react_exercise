import React, { Component } from "react";
import Home from "./Home";
import Banner from "./Banner";
import Profile from "./Profile";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps, newState) {
    // 在这里判断是否需要重新渲染组件
    if (this.state.message !== newState.message) {
      return true;
    }
    return false;
  }
  changeText() {
    this.setState({ message: "Hello USTB" });
    // this.setState({ message: "Hello World" });
  }
  render() {
    console.log("App 执行render");
    const { message, count } = this.state;

    return (
      <div>
        <h2>
          App:{message}-{count}
        </h2>
        <button
          onClick={(e) => {
            this.changeText();
          }}
        >
          修改文本
        </button>
        <Home message={message} />
        <Banner count={count} />
        <Profile count={count} />
      </div>
    );
  }
}

export default App;
