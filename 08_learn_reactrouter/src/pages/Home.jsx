import React, { PureComponent } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import withRouter from "../hoc/withRouter";
export class Home extends PureComponent {
  navigateTo(path) {
    const { navigate } = this.props.router;
    navigate(path);
  }

  render() {
    return (
      <div>
        <h2>Home page</h2>

        <div className="home-nav">
          <Link to="/home/recommend">推荐</Link>
          <Link to="/home/ranking">榜单</Link>
          <button onClick={(e) => this.navigateTo("/home/songmenu")}>
            歌单
          </button>
        </div>

        {/* 占位组件 */}
        <Outlet></Outlet>
      </div>
    );
  }
}

export default withRouter(Home);
