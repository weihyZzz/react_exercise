import React, { Component } from "react";
import { flushSync } from "react-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "HelloReact",
      count: 0,
    };
  }
  changeText() {
    this.setState({ message: "Hello USTB" });
    console.log("message:", this.state.message);
  }
  changeTextSync() {
    flushSync(() => {
      this.setState({ message: "Hello Sync" });
    });
    console.log("message:", this.state.message);
  }
  render() {
    console.log("执行render函数");
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <button onClick={(e) => this.changeTextSync()}>同步改变文本</button>
      </div>
    );
  }
}

export default App;
