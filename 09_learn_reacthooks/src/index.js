import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContext, ThemeContext } from "./04_context的使用/context"
// import App from './App';
// import App from './01_计数器案例的类组件与hook实现/App'
// import App from './02_useState的使用/App'
// import App from './03_useEffect的使用/01_Effect基本使用'
// import App from './03_useEffect的使用/02_Effect清除机制'
// import App from './03_useEffect的使用/03_多个Effect使用'
// import App from './03_useEffect的使用/04_Effect执行机制'

import App from "./04_context的使用/App"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContext.Provider value={{name: "weihy", school: "ustb"}}>
        <ThemeContext.Provider value={{color: "orange", size: "22px"}}>
            <App />
        </ThemeContext.Provider>
    </UserContext.Provider>
);


 