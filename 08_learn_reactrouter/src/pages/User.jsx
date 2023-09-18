import React, { PureComponent } from "react";
import withRouter from "../hoc/withRouter";

// 演示查询字符串相关用法
export class User extends PureComponent {
  render() {
    const { query } = this.props.router;
    return (
      <div>
        <h2>
          用户页面 {query.name}-{query.school}
        </h2>
      </div>
    );
  }
}

export default withRouter(User);
