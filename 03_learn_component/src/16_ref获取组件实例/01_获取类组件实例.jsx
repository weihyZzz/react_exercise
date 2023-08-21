import React, { Component, createRef } from "react";
class HelloWorld extends Component {
  helloMethod() {
    console.log("执行组件helloMethod方法");
  }
  render() {
    return <div>Hello World</div>;
  }
}

export class App extends Component {
  constructor() {
    super();
    this.helloComponentRef = createRef();
  }
  getComponent() {
    console.log("HelloWorld组件实例:", this.helloComponentRef.current);
    const hComponent = this.helloComponentRef.current;
    hComponent.helloMethod();
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
