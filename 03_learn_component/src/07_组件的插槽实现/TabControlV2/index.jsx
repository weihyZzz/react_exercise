import React, { Component } from "react";
import "./style.css";
export class NavBarV2 extends Component {
  // 采用props.children的方式实现插槽
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;

    return (
      <div className="nav-bar">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    );
  }
}

export default NavBarV2;
