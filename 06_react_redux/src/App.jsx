import logo from "./logo.svg";
import "./App.css";
import { addNumberAction } from "./store/actionCreators";
import React, { PureComponent } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import store from "./store";
import About from "./pages/About";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    // 在组件挂载时进行store内数据的订阅
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counter });
    });
  }
  addNumber(num) {
    store.dispatch(addNumberAction(num));
  }
  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="cal">
            <div className="itemCounter">
              <h2>App counter: {counter}</h2>
              <button onClick={(e) => this.addNumber(1)}>+1</button>
              <button onClick={(e) => this.addNumber(5)}>+5</button>
            </div>
            <Home />
            <Profile />
            <About />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
