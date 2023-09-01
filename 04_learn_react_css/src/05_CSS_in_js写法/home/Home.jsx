import React, { PureComponent } from "react";
import { HomeWrapper } from "./style";
export class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div className="title">Home Page</div>
      </HomeWrapper>
    );
  }
}

export default Home;
