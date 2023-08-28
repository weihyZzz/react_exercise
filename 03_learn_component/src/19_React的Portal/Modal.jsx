import { PureComponent } from "react";
import { createPortal } from "react-dom";

export class Modal extends PureComponent {
  render() {
    // 接受插槽传入的子元素内容，并渲染到modal的节点上
    return createPortal(this.props.children, document.querySelector("#modal"));
  }
}

export default Modal;
