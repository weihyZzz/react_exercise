import React, { PureComponent } from "react";
import classNames from "classnames";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isB: true,
      isC: false,
    };
  }
  render() {
    // isB isC 代表是否添加b类以及c类
    const { isB, isC } = this.state;
    // 定义class数组
    const classList = ["classA"];
    if (isB) classList.push("classB");
    if (isC) classList.push("classC");
    const classname = classList.join(" ");
    return (
      <div>
        {/* 方式一：通过模版字符串 */}
        <h2 className={`classA ${isB ? "classB" : ""} ${isC ? "classC" : ""}`}>
          方式一：通过模版字符串添加class
        </h2>
        {/* 方式二：通过数组添加class */}
        <h2 className={classname}>方式二：通过数组添加class</h2>
        {/* 方式三： 通过classnames库 */}
        <h2 className={classNames("classA", { classB: isB, classC: isC })}>
          方式三： 通过classnames库
        </h2>
      </div>
    );
  }
}

export default App;
