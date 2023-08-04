import React from 'react'
import HelloWorld from './HelloWorld'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isShow: true
        }
    }
    switchShow() {
        this.setState({isShow: !this.state.isShow})
    }
    render() {
        const { isShow } = this.state
        return (
            <div>
                演示React生命周期
                {/* 引入HelloWorld组件, isShow则控制该组件是否消失 */}
                { isShow && <HelloWorld/>}
                <button onClick={e => {this.switchShow()}}>切换</button>
            </div>
        )
    }
}
export default App