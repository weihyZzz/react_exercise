import React, { Component } from "react";
import Home from "./Home";
import eventBus from "./utils/event-bus";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      height: 0,
    };
  }
  componentDidMount() {
    // 通过事件总线，获取HomeBanner组件传递来的数据
    // 函数作为参数传递时，注意this指向问题
    eventBus.on("bannerPrev", this.bannerPrevClick.bind(this));
  }
  componentWillUnmount() {
    eventBus.off("bannerPrev", this.bannerPrevClick);
  }
  bannerPrevClick(name, age, height) {
    console.log("app监听到bannerPrev", name, age, height);
    this.setState({ name, age, height });
  }
  render() {
    // 渲染 name age height
    const { name, age, height } = this.state;
    return (
      <div>
        <h2>
          Home:{name}-{age}-{height}
        </h2>
        <Home />
      </div>
    );
  }
}

export default App;
