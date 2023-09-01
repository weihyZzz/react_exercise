import React, { PureComponent } from "react";
import { AppWrapper, SectionWrapper } from "./style";
import Home from "./home/Home";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      size: 30,
      color: "orange",
    };
  }
  render() {
    const { size, color } = this.state;
    return (
      <AppWrapper>
        <SectionWrapper size={size} color={color}>
          <h2 className="title">我是标题</h2>
          <p className="content">我是内容</p>
        </SectionWrapper>

        <div className="footer">
          <p>版权所有</p>
        </div>

        <Home />
      </AppWrapper>
    );
  }
}

export default App;
