// 在About页面中演示connect的用法
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction } from "../store/actionCreators";
export class About extends PureComponent {
  //    通过mapDispatchToProps的映射，从props中取用函数来触发action
  addNum(num) {
    this.props.addNumber(num);
  }
  render() {
    // 通过mapStateToProps的映射，直接从props中取用store的状态
    const { counter } = this.props;
    return (
      <div className="App">
        <div className="cal">
          <div className="itemCounter">
            <h2>About counter: {counter}</h2>
            <button onClick={(e) => this.addNum(1)}>+1</button>
            <button onClick={(e) => this.addNum(100)}>+100</button>
          </div>
        </div>
      </div>
    );
  }
}

// 将 Redux store 中的数据映射到组件的 props 上
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
// 将 action creators 映射到组件的 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    addNumber(num) {
      dispatch(addNumberAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
