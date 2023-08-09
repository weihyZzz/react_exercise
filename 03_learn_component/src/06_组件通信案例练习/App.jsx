import React, { Component } from "react";
import TabControl from "./TabControl";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["华语", "欧美", "流行"],
      contentIndex: 0,
    };
  }
  changeIndex(index) {
    console.log("改变为", index);
    this.setState({ contentIndex: index });
  }
  render() {
    const { titles, contentIndex } = this.state;
    return (
      <div>
        <TabControl
          titles={titles}
          setContent={(index) => {
            this.changeIndex(index);
          }}
        />
        <h2>{titles[contentIndex]}</h2>
      </div>
    );
  }
}

export default App;
