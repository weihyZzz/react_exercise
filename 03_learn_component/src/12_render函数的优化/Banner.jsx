import React, { Component } from "react";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps, newState) {
    if (nextProps.count !== this.props.count) {
      return true;
    }
    return false;
    // return false;
  }
  render() {
    console.log("Banner 执行render");
    const { count } = this.props;
    return (
      <div>
        <h2>Banner: {count}</h2>
      </div>
    );
  }
}

export default Banner;
