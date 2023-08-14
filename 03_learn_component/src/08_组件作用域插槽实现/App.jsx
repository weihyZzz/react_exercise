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
  getTabItem(item) {
    // 根据item不同来返回不同的插槽
    if (item === "华语") {
      return <span>{item}</span>;
    } else if (item === "欧美") {
      return <i>{item}</i>;
    } else {
      return <button>{item}</button>;
    }
  }
  render() {
    const { titles, contentIndex } = this.state;
    return (
      // 作用域插槽的主要目的是允许子组件在插槽内容中访问父组件的数据，并且在子组件内部进行处理。
      // 作用域插槽解决了一般插槽不能访问父组件数据的问题
      <div>
        <TabControl
          titles={titles}
          setContent={(index) => {
            this.changeIndex(index);
          }}
          // 可以直接返回具体的button ， 也可以通过getTabItem函数，根据不同的值返回不同的元素类型
          itemType={(item) => <button>{item}</button>}
          // itemType={(item) => this.getTabItem(item)}
        />
        <h2>{titles[contentIndex]}</h2>
      </div>
    );
  }
}

export default App;
