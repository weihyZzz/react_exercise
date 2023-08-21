import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }
  inputChange(event) {
    console.log(event.target.value);
    this.setState({ message: event.target.value });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => this.inputChange(e)}
        />
        <h2>message: {message}</h2>
      </div>
    );
  }
}

export default App;
