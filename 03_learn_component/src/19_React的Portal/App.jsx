import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
export class App extends PureComponent {
  render() {
    return (
      <div>
        App
        {createPortal(
          <h2>createPortal插入到weihy中</h2>,
          document.querySelector("#weihy")
        )}
        {/* 向Modal组件传入子元素 */}
        <Modal>
          <h3>Moadl传入内容1</h3>
          <h3>Modal传入内容2</h3>
        </Modal>
      </div>
    );
  }
}

export default App;
