import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../store/features/counter";
class Home extends PureComponent {
  addNumber(num) {
    this.props.addNumber(num);
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>Home Page:{counter}</h2>
        <button onClick={(e) => this.addNumber(20)}>+20</button>
        <button onClick={(e) => this.addNumber(100)}>+100</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
