import React, { Component } from "react";
import AddCount from "./AddCount";
import SubCount from "./SubCount";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
    };
  }
  changeCount(count) {
    console.log("click点击", count);
    const newCount = this.state.count + count;
    this.setState({ count: newCount });
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        {count}
        <AddCount
          addClick={(count) => {
            this.changeCount(count);
          }}
        />
        {/* 向子组件传递函数subClick */}
        <SubCount
          subClick={(count) => {
            this.changeCount(count);
          }}
        />
      </div>
    );
  }
}

export default App;
