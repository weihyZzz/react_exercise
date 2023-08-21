import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    // 创建ref对象
    this.refTwo = createRef();

    this.refThree = null;
  }
  render() {
    return (
      <div>
        <h2 ref="weihy">获取DOM方式一</h2>

        <h2 ref={this.refTwo}>获取DOM方式二</h2>
        <h2 ref={(el) => (this.refThree = el)}>获取DOM方式三</h2>
        <button onClick={(e) => this.getNativeDOM()}>获取DOM</button>
      </div>
    );
  }

  getNativeDOM() {
    // 获取原生DOM
    // 1.方式一：在react元素上绑定一个ref字符串
    console.log("第一种方式：", this.refs.weihy);
    // 2.方式二：提前创建ref对象，createRef(),将创建出来的对象绑定到元素
    console.log("第二种方式：", this.refTwo.current);

    // 3.方式三：传入一个回调函数，在对应元素渲染后将元素传入
    console.log("第三种方式：", this.refThree);
  }
}

export default App;
