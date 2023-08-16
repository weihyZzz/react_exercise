import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "HelloReact",
      count: 0,
    };
  }
  changeText() {
    // 1.setState基本使用
    this.setState({ message: "Hello USTB" });
  }
  increment() {
    console.log("--------");
    // 只会执行一次render函数，下列三行最后执行结果是 -2
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count - 2 });

    // 如果在一个事件函数中，需要连续对一个状态进行更改，需要为setState传入回调函数
    // 下列三个setState执行完后，counter值为0
    this.setState((state) => {
      return {
        counter: state + 1,
      };
    });
    this.setState((state) => {
      return {
        counter: state + 1,
      };
    });
    this.setState((state) => {
      return {
        counter: state - 2,
      };
    });
  }
  render() {
    console.log("执行render函数");
    const { message, count } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <h2>{count}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }
}

export default App;
