import React, { PureComponent } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { changeGoodsAction } from "../store/actionCreators";
const url =
  "https://www.fastmock.site/mock/1c5e8f3cc0c26cb2cac70e4c6541c965/cms";

export class Category extends PureComponent {
  componentDidMount() {
    const path = url + "/goods/list";
    axios.post(path).then((res) => {
      console.log("商品列表", res.data.data.list);
      const goods = res.data.data.list;
      this.props.changeGoods(goods);
    });
  }

  render() {
    return <div>Category Page</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeGoods(goods) {
      dispatch(changeGoodsAction(goods));
    },
  };
};
export default connect(null, mapDispatchToProps)(Category);
