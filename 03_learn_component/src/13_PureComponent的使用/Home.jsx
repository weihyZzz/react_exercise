import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("Home 执行render");
    const { message } = this.props;
    return (
      <div>
        <h2>Home: {message}</h2>
      </div>
    );
  }
}

export default Home;
