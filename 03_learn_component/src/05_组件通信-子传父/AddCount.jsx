import React, { Component } from "react";

class AddCount extends Component {
  addCount(count) {
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
