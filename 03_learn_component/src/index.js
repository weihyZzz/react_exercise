import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';

// import App from './02_react生命周期/App'
// import App from './03_组件开发嵌套关系/App';
import App from './04_父子组件通信/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals