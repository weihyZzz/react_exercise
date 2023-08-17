import { memo } from "react";

const Profile = memo(function (props) {
  console.log("Profile 执行render");
  return <h2>Profile: {props.count}</h2>;
});
export default Profile;
