import React, { Component } from "react";
import Hello from "./Hello";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "HelloReact",
      count: 0,
    };
  }
  changeText() {
    // 如果setState是同步调用，那么会立马更新message的值，而并未执行render函数
    // 那么给子组件Hello传递的message参数还是之前的旧值(HelloReact)，就会造成state和props不一致
    this.setState({ message: "Hello USTB" });
  }
  increment() {
    console.log("--------");
    // 只会执行一次render函数，下列三行最后执行结果是 -2
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("执行render函数");
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Hello message={message} />
      </div>
    );
  }
}

export default App;
