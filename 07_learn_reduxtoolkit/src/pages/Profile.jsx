import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeMultidataAction } from "../store/features/home";
class Profile extends PureComponent {
  render() {
    const { counter, goods } = this.props;
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
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchHomeMultidata();
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    goods: state.home.goods,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeMultidata() {
      dispatch(fetchHomeMultidataAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
