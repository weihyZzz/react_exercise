import React, { PureComponent } from "react";
import { connect } from "react-redux";
export class Goods extends PureComponent {
  render() {
    const { goods } = this.props;
    return (
      <div>
        <h2>Goods Page</h2>
        <ul style={{ fontSize: "19px" }}>
          {goods.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
  };
};
export default connect(mapStateToProps)(Goods);
