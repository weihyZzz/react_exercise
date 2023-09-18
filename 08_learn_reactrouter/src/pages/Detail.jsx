import React, { PureComponent } from "react";
import withRouter from "../hoc/withRouter";
export class Detail extends PureComponent {
  render() {
    const { router } = this.props;
    const { params } = router;
    return (
      <div>
        <h2>详情页</h2>
        <h3>歌曲id:{params.id}</h3>
      </div>
    );
  }
}

export default withRouter(Detail);
