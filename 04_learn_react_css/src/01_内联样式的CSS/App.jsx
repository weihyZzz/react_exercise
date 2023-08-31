import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      titleSize: 30,
    };
  }
  addTitleSize() {
    const titleSize = this.state.titleSize + 3;
    this.setState({ titleSize });
  }
  render() {
    const { titleSize } = this.state;
    return (
      <div>
        {/* 内联样式 */}
        <h2 style={{ color: "#2e3bf7", fontSize: `${titleSize}px` }}>
          我是标题
        </h2>
        <p style={{ color: "skyblue", fontSize: "20px" }}>我是内容</p>
        <button onClick={(e) => this.addTitleSize()}>增加标题</button>
      </div>
    );
  }
}

export default App;
