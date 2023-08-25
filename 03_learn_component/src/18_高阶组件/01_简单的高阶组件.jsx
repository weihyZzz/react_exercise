import React, { PureComponent } from "react";

// 使用高阶组件,本质是一个函数，用于返回一个新组件
function hoc(Cpn) {
  // 1.定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn name="why" />;
    }
  }
  return NewCpn;
}

class HelloWorld extends PureComponent {
  render() {
    return <h1>Helloworld</h1>;
  }
}
const HelloHOC = hoc(HelloWorld);

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloHOC />
      </div>
    );
  }
}

export default App;
