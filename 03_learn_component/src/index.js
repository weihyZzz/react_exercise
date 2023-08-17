import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';

// import App from './02_react生命周期/App'
// import App from './03_组件开发嵌套关系/App';
// import App from './04_组件通信-父传子/App'
// import App from './05_组件通信-子传父/App'
// import App from './06_组件通信案例练习/App'
// import App from './07_组件的插槽实现/App'
// import App from './08_组件作用域插槽实现/App'
// import App from './09_非父子通信-Context/App'
// import App from './10_非父子通信-EventBus/App'
// import App from './11_setState详细使用/04_setState如何实现同步'
// import App from './11_setState详细使用/01_jsx三种写法'
// import App from './11_setState详细使用/02_setState连续更新状态'

// import App from './12_render函数的优化/App'
import App from './13_PureComponent的使用/App'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App name="weihy"/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals