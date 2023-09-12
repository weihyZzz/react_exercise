import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';
import store from './store'
import { StoreContext } from './diyConnect'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={ store }>
      {/* 完成手写connect函数和store解耦 */}
      <StoreContext.Provider value={ store }>
        <App />
      </StoreContext.Provider>
    </Provider>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

