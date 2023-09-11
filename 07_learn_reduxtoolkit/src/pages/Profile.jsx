import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  fetchHomeMultidataAction,
  fetchUserDataAction,
} from "../store/features/home";
class Profile extends PureComponent {
  render() {
    const { counter, goods, users } = this.props;
    return (
      <div>
        <h2>Profile Page {counter}</h2>
        <h2>商品数据</h2>
        <ul>
          {goods.map((item) => {
            return (
              <li key={item.name}>
                {item.name}-{item.newPrice}
              </li>
            );
          })}
        </ul>

        <h2>用户数据</h2>
        <ul>
          {users.map((item) => {
            return (
              <li key={item.cellphone}>
                {item.name}-{item.cellphone}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchHomeMultidata();
    this.props.fetchUserData();
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    goods: state.home.goods,
    users: state.home.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeMultidata() {
      dispatch(fetchHomeMultidataAction());
    },
    fetchUserData() {
      dispatch(fetchUserDataAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
