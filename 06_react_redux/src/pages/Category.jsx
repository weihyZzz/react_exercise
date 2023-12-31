import React, { PureComponent } from "react";

import { connect } from "react-redux";
import {
  fetchGoodsAction,
  fetchUserAction,
} from "../store/netdata/actionCreators";
// Category页面用来获取数据
export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchGoods();
    this.props.fetchUser();
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
    fetchUser() {
      dispatch(fetchUserAction());
    },
  };
};
export default connect(null, mapDispatchToProps)(Category);
