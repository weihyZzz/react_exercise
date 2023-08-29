import React, { PureComponent } from "react";

class Home extends PureComponent {
  componentDidMount() {
    console.log(this.refs.title);
  }
  render() {
    return (
      <div>
        Home
        <h2 ref="title">Home Title</h2>
      </div>
    );
  }
}

export default Home;
