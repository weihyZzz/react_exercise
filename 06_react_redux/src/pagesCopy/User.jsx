import React, { PureComponent } from "react";
import { connect } from "react-redux";
export class User extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h2>User Page</h2>
        <ul>
          {user.map((item) => {
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
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(User);
