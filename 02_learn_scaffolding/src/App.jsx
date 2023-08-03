import React from "react";
import HelloWorld from "./Components/HelloWorld";
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "weihy的第一个React"
        }
    }
    render() {
        const { message } = this.state
        return (
            <div>
                <h2>{message}</h2>
                <HelloWorld/>
            </div>
        )
    }
}
export default App