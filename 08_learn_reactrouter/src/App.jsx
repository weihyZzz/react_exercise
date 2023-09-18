import React from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import HomeRecommends from "./pages/HomeRecommends";
import HomeRanking from "./pages/HomeRanking";
import Category from "./pages/Category";
import Order from "./pages/Order";
import HomeSongmenu from "./pages/HomeSongmenu";
import Detail from "./pages/Detail";
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
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            {/* 配置嵌套路由 */}
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<HomeRecommends />} />
            <Route path="/home/ranking" element={<HomeRanking />} />
            <Route path="/home/songmenu" element={<HomeSongmenu />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="/detail/:id" element={<Detail />} />
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

export default App;
