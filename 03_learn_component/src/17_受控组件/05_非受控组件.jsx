import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      defaultValue: "请输入用户名",
    };
    this.userRef = createRef();
  }
  handelSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault();
    // 2.获取表单数据
    console.log("用户名", this.userRef.current.value);
  }
  render() {
    const { defaultValue } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handelSubmitClick(e)}>
          <label htmlFor="username">
            用户名
            {/* 非受控组件直接通过ref获取DOM实例，从其中取具体的数据 */}
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={defaultValue}
              ref={this.userRef}
            />
          </label>
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
