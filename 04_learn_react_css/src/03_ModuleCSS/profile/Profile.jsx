import React, { PureComponent } from "react";
import profileStyle from "./Profile.module.css";
export class Profile extends PureComponent {
  render() {
    return (
      <div className={profileStyle.title}>Profile Page(标题样式是蓝色)</div>
    );
  }
}

export default Profile;
