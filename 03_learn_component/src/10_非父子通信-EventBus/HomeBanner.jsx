import React, { Component } from "react";
import eventBus from "./utils/event-bus";
class HomeBanner extends Component {
  prevClick() {
    console.log("上一个");
    eventBus.emit("bannerPrev", "why", 18, 1.88);
  }
  nextClick() {
    console.log("下一个");
  }
  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={this.prevClick}>上一个</button>
        <button onClick={this.nextClick}>下一个</button>
      </div>
    );
  }
}

export default HomeBanner;
