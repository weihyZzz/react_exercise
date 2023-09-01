import React, { PureComponent } from "react";
import { HomeWrapper, ButtonWrapper, PlusButtonWrapper } from "./style";
export class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div className="title">Home Page</div>

        {/* 演示styled中样式的继承 */}
        <ButtonWrapper>按钮1</ButtonWrapper>
        <PlusButtonWrapper>按钮升级版</PlusButtonWrapper>
      </HomeWrapper>
    );
  }
}

export default Home;
