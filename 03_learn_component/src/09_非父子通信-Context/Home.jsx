import React, { Component } from "react";
import HomeInfo from "./HomeInfo";
import HomeBanner from "./HomeBanner";

class Home extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h3>
          Home:{name}-{age}
        </h3>
        <HomeInfo />
        <HomeBanner />
      </div>
    );
  }
}

export default Home;
