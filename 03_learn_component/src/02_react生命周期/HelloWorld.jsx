import React from 'react'

class HelloWorld extends React.Component {
    constructor() {
        // 1.执行constructor函数
        console.log('HelloWorld组件： 执行constructor');
        super()
        this.state = {
            message: 'Hello React'
        }
    }
    changeText() {
        this.setState({message: '点击了更改文字按钮'})
    }

    render() {
        // 2.执行render函数
        console.log('HelloWorld组件： 执行render');
        const { message } = this.state
        return (
            <div>
                <h2>{message}</h2>
                <button onClick={e => {this.changeText()}}>更改</button>
            </div>
        )
    }
    componentDidMount() {
        // 3.执行componentDidMount ，组件被渲染到DOM，挂载到DOM
        console.log('HelloWorld组件： 执行componentDidMount');
    }
    componentDidUpdate() {
        // 4.如果执行了setState函数，则触发DOM更新
        console.log('HelloWorld组件： 执行componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('HelloWorld组件： 执行componentWillUnmount');
    }
}

export default HelloWorld