import React, { Component } from "react";

class SubCount extends Component {
  subCount(count) {
    const { subClick } = this.props;
    subClick(count);
  }
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.subCount(-1);
          }}
        >
          -1
        </button>
        <button
          onClick={(e) => {
            this.subCount(-5);
          }}
        >
          -5
        </button>
      </div>
    );
  }
}

export default SubCount;
