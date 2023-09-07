import React, { PureComponent } from "react";

import { connect } from "react-redux";
import { fetchGoodsAction } from "../store/actionCreators";

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchGoods();
  }

  render() {
    return <div>Category Page</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGoods() {
      dispatch(fetchGoodsAction());
    },
  };
};
export default connect(null, mapDispatchToProps)(Category);
