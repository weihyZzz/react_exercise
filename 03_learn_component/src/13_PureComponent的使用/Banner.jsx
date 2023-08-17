import React, { PureComponent } from "react";

class Banner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("Banner 执行render");
    const { count } = this.props;
    return (
      <div>
        <h2>Banner: {count}</h2>
      </div>
    );
  }
}

export default Banner;
