import React, { PureComponent } from "react";

class CountClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 66,
    };
  }
  setCount(num, isAdd) {
    const oldCount = this.state.count;
    if (isAdd) {
      this.setState({ count: oldCount + num });
    } else {
      this.setState({ count: oldCount - num });
    }
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>类组件计数: {count}</h3>
        <button onClick={(e) => this.setCount(1, true)}>+1</button>
        <button onClick={(e) => this.setCount(1, false)}>-1</button>
      </div>
    );
  }
}

export default CountClass;
