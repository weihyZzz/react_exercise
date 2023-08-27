import React, { PureComponent } from "react";
import logRenderTime from "../hoc/log_render_time";

export class Detail extends PureComponent {
  render() {
    return (
      <div>
        Detail
        <ul>
          <li>商品详情1</li>
          <li>商品详情2</li>
          <li>商品详情3</li>
          <li>商品详情4</li>
          <li>商品详情5</li>
          <li>商品详情6</li>
          <li>商品详情7</li>
          <li>商品详情8</li>
          <li>商品详情9</li>
          <li>商品详情10</li>
        </ul>
      </div>
    );
  }
}

export default logRenderTime(Detail);
