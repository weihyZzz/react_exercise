import React, { PureComponent } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>header</h2>
          <div className="nav">
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
          </div>
          <hr />
        </div>
        <div className="content">
          {/* 配置映射关系， path - Component */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
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
