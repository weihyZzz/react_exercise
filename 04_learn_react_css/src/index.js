import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './01_内联样式的CSS/App';
// import App from './02_普通的CSS/App'
// import App from './03_ModuleCSS/App'
import App from './04_Less编写方式/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

