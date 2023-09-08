import React, { PureComponent } from "react";
import store from "../store";
import { addNumberAction } from "../store/actionCreators";
export class Profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
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
            <h2>Profile counter: {counter}</h2>
            <button onClick={(e) => this.addNumber(1)}>+1</button>
            <button onClick={(e) => this.addNumber(5)}>+5</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
