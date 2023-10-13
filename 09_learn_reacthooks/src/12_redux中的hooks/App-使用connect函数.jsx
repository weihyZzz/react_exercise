import React, { memo } from "react";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "./store/modules/counter";
const App = memo((props) => {
  const { count } = props;
  const { addNumber, subNumber } = props;
  function handleCount(num, isAdd) {
    if (isAdd) {
      addNumber(num);
    } else subNumber(num);
  }
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={(e) => handleCount(1, true)}>+1</button>
      <button onClick={(e) => handleCount(10, false)}>-10</button>
    </div>
  );
});

const mapStateToProps = (state) => ({
  count: state.counter.count,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(incrementAction(num));
  },
  subNumber(num) {
    dispatch(decrementAction(num));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
