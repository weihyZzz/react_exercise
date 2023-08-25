import React, { PureComponent } from "react";
import enhancedUserInfo from "./hoc/enhanced_props";

const Home = enhancedUserInfo(function (props) {
  return (
    <h2>
      Home: {props.name}-{props.age}-{props.hobby}
    </h2>
  );
});
const Profile = enhancedUserInfo(function (props) {
  return (
    <h2>
      Profile: {props.name}-{props.age}
    </h2>
  );
});
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home hobby="rap" />
        <Profile />
      </div>
    );
  }
}

export default App;
