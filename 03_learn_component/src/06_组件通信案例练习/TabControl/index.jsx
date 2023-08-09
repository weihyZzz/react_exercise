import React, { Component } from "react";
import "./style.css";
class TabControl extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  itemClick(index) {
    this.setState({ currentIndex: index });
    // 执行父组件传递给子组件的函数
    this.props.setContent(index);
  }
  render() {
    const { titles } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="tabControl">
        {titles.map((item, index) => {
          return (
            <div
              className={`item ${index === currentIndex ? "active" : " "}`}
              key={item}
              onClick={(e) => this.itemClick(index)}
            >
              <span className="text">{item}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TabControl;
