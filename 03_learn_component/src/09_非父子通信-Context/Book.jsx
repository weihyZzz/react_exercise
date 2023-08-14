import React, { Component } from "react";
import ThemeContext from "./context/theme-context";
class Book extends Component {
  render() {
    // 没有提供匹配的 Context Provider，那么在组件中使用 contextType 或者
    // useContext 获取 Context 值时，它们会返回默认值。
    console.log("Book打印context默认值:", this.context);
    return <div>Book(非UserContext.Provider后代组件)</div>;
  }
}

Book.contextType = ThemeContext;
export default Book;
