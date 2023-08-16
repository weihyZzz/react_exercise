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
    // this.setState({ message: "Hello USTB" });

    // 2.setState使用回调函数作为参数

    // 优点1:可以在回调函数中编写状态的处理逻辑
    // 优点2:会将之前的state和props传递给函数
    // this.setState((prevState, props) => {
    //   console.log("最新state:", prevState);
    //   console.log("props信息", props);
    //   return {
    //     message: "Hello USTB（采用回调函数作为参数）",
    //   };
    // });

    // 3.setState传入第二个参数callback
    // 该函数会在状态更新完成并重新渲染组件后被调用。这可以用来执行与更新状态相关的操作，以及在确保状态更新后执行其他逻辑。

    this.setState({ message: "Hello USTB(验证setState是异步)" }, () => {
      // 在回调中获取更新后的状态
      console.log("setState的回调函数中打印message", this.state.message);
    });
    console.log("执行setState后立马打印message：", this.state.message);
  }
  render() {
    const { message, count } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <h2>{count}</h2>
        <button>+1</button>
      </div>
    );
  }
}

export default App;
