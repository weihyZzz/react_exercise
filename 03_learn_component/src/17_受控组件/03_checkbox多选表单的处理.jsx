import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isAgree: false,
      hobbies: [
        { value: "sing", text: "唱", isChecked: false },
        { value: "dance", text: "跳", isChecked: false },
        { value: "rap", text: "rap", isChecked: false },
      ],
    };
  }
  handelSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault();
    // 2.获取所有表单数据
    console.log("获取所有输入内容");
    console.log(this.state.username, this.state.password);
    console.log("是否同意:", this.state.isAgree);
    console.log(
      "用户爱好:",
      this.state.hobbies
        .filter((item) => item.isChecked)
        .map((item) => item.value)
    );
  }
  handelChange(event) {
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }
  handleCheckChange(event) {
    // checkbox的值要从checked取
    this.setState({ isAgree: event.target.checked });
  }
  handleHobbiesChange(event, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = event.target.checked;
    this.setState({ hobbies });
  }
  render() {
    const { username, password, isAgree, hobbies } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handelSubmitClick(e)}>
          <div>
            <label htmlFor="username">
              用户名:
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => this.handelChange(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              密码：
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => this.handelChange(e)}
              />
            </label>
          </div>
          <label htmlFor="agree">
            <input
              type="checkbox"
              id="agree"
              checked={isAgree}
              onChange={(e) => this.handleCheckChange(e)}
            />
            同意协议
          </label>
          <div>
            {hobbies.map((item, index) => {
              return (
                <label htmlFor={item.value} key={item.value}>
                  <input
                    type="checkbox"
                    id={item.value}
                    checked={item.isChecked}
                    onChange={(e) => this.handleHobbiesChange(e, index)}
                  />
                  <span>{item.text}</span>
                </label>
              );
            })}
          </div>
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
