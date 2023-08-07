import React, { Component } from "react";
import AddCount from "./AddCount";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
    };
  }
  changeCount(count) {
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
      </div>
    );
  }
}

export default App;
