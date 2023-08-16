import React, { Component } from "react";

class Hello extends Component {
  render() {
    const { message } = this.props;
    return <div>Hello-{message}</div>;
  }
}

export default Hello;
