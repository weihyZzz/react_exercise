import React from "react";
import { Link, NavLink, useNavigate, useRoutes } from "react-router-dom";
import routes from "./router";
import "./style.css";
export function App(props) {
  const navigate = useNavigate();
  function navigateTo(path) {
    navigate(path);
  }
  return (
    <div className="app">
      <div className="header">
        <h2>header</h2>
        <div className="nav">
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/user?name=weihy&school=ustb">用户</Link>

          {/* 通过useNavigate实现js代码路由跳转 */}
          <button onClick={(e) => navigateTo("/category")}>分类</button>
          <span onClick={(e) => navigateTo("/order")}>订单</span>
          <div className="navlink">
            <span>NavLink组：</span>
            <NavLink to="/home">首页</NavLink>
            <NavLink to="/about">关于</NavLink>
          </div>
        </div>
        <hr />
      </div>
      <div className="content">
        {/* 配置映射关系， path - Component */}
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <hr />
        <h2>footer</h2>
      </div>
    </div>
  );
}

export default App;
