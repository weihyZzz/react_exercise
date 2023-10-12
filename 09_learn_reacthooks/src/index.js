import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContext, ThemeContext } from "./04_useContext的使用/context"
import store from './12_redux中的hooks/store';
import { Provider } from "react-redux"
// import App from './App';
// import App from './01_计数器案例的类组件与hook实现/App'
// import App from './02_useState的使用/App'
// import App from './03_useEffect的使用/01_Effect基本使用'
// import App from './03_useEffect的使用/02_Effect清除机制'
// import App from './03_useEffect的使用/03_多个Effect使用'
// import App from './03_useEffect的使用/04_Effect执行机制'

// import App from "./04_useContext的使用/App"
// import App from "./05_useReducer的使用/App"

// import App from "./06_useCallback/App"
// import App from "./07_useMemo的使用/App"

// import App from "./08_useRef的使用/App"
// import App from "./09_useImperativeHandle/App"
// import App from "./10_useLayoutEffect使用/01_useEffect和LayoutEffect区别"
// import App from "./10_useLayoutEffect使用/App"
// import App from "./11_自定义hook/打印生命周期"
import App from "./12_redux中的hooks/App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContext.Provider value={{name: "weihy", school: "ustb"}}>
        <ThemeContext.Provider value={{color: "orange", size: "22px"}}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeContext.Provider>
    </UserContext.Provider>
);


 