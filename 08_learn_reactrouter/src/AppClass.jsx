import React, { PureComponent } from "react";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import HomeRecommends from "./pages/HomeRecommends";
import HomeRanking from "./pages/HomeRanking";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  setLogin() {
    this.setState({ isLogin: true });
  }
  render() {
    // const { isLogin } = this.state;
    return (
      <div className="app">
        <div className="header">
          <h2>header</h2>
          <div className="nav">
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>

            <div className="navlink">
              <span>NavLink组：</span>
              <NavLink to="/home">首页</NavLink>
              <NavLink to="/about">关于</NavLink>
              <NavLink onClick={(e) => this.setLogin()}>登录</NavLink>
            </div>
          </div>
          <hr />
        </div>
        <div className="content">
          {/* 配置映射关系， path - Component */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
              {/* 配置嵌套路由 */}
              <Route path="/home" element={<Navigate to="/home/recommend" />} />
              <Route path="/home/recommend" element={<HomeRecommends />} />
              <Route path="/home/ranking" element={<HomeRanking />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
        <div className="footer">
          <hr />
          <h2>footer</h2>
        </div>
      </div>
    );
  }
}

export default App;
