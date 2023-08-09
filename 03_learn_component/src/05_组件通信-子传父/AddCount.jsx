import React, { Component } from "react";

class AddCount extends Component {
  addCount(count) {
    // addClick是父组件传递给子组件的函数，子组件调用该函数
    const { addClick } = this.props;
    addClick(count);
  }
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.addCount(1);
          }}
        >
          +1
        </button>
        <button
          onClick={(e) => {
            this.addCount(5);
          }}
        >
          +5
        </button>
      </div>
    );
  }
}

export default AddCount;
