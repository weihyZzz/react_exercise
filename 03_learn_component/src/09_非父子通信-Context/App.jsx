import React, { Component } from "react";
import Home from "./Home";

import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context";
import Book from "./Book";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: "why",
        age: 20,
      },
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <Book />
        {/* spread attributes用法，可以直接将一个对象传给组件，组件可以直接从props中解构出参数 */}
        {/* <Home {...info} /> */}
        {/* 2.通过ThemeContext.Provider中value属性为后代提供数据 */}
        <UserContext.Provider value={{ nickname: "why", age: 20 }}>
          <ThemeContext.Provider value={{ color: "red", size: "30" }}>
            <Home {...info} />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
