import React, { Component, createRef, forwardRef } from "react";

// 获取函数式组件中的DOM
const HelloWorld = forwardRef(function (props, ref) {
  return (
    <div>
      <h2 ref={ref}>HelloWorld函数式组件</h2>
      <span>ustb</span>
    </div>
  );
});

export class App extends Component {
  constructor() {
    super();
    this.helloComponentRef = createRef();
  }
  getComponent() {
    console.log("HelloWorld组件实例:", this.helloComponentRef.current);
  }
  render() {
    return (
      <div>
        App
        <HelloWorld ref={this.helloComponentRef} />
        <button onClick={(e) => this.getComponent()}>获取组件实例</button>
      </div>
    );
  }
}

export default App;
