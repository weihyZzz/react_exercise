import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      fruit: "apple",
      fruitArray: ["apple"],
    };
  }
  handelSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault();
    // 2.获取所有表单数据
    console.log("水果单选select", this.state.fruit);
    console.log("水果多选select", this.state.fruitArray);
  }
  handleFruitChange(event) {
    this.setState({ fruit: event.target.value });
  }
  handleFruitArrayChange(event) {
    // event.target.selectedOptions是 HTMLCollection数组
    console.log("event信息,", event.target.selectedOptions);
    const options = Array.from(event.target.selectedOptions);
    console.log("options", options);
    const values = options.map((item) => item.value);
    this.setState({ fruitArray: values });
  }
  render() {
    const { fruit, fruitArray } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handelSubmitClick(e)}>
          {/* select单选 */}
          <select value={fruit} onChange={(e) => this.handleFruitChange(e)}>
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select>

          {/* select多选 */}
          <select
            value={fruitArray}
            onChange={(e) => this.handleFruitArrayChange(e)}
            multiple
          >
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select>
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
