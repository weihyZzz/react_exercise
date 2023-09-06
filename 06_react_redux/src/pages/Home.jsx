import React, { PureComponent } from "react";
import { addNumberAction } from "../store/actionCreators";
import store from "../store/index";

export class Home extends PureComponent {
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
        <div className="cal">
          <div className="itemCounter">
            <h2>Home counter: {counter}</h2>
            <button onClick={(e) => this.addNumber(1)}>+1</button>
            <button onClick={(e) => this.addNumber(5)}>+5</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
