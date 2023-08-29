import React, { PureComponent } from "react";

class Profile extends PureComponent {
  componentDidMount() {
    console.log(this.refs.title);
  }
  render() {
    return (
      <div>
        Profile
        <h2 ref="title">Profile Title</h2>
      </div>
    );
  }
}

export default Profile;
