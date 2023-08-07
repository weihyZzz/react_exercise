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
    componentDidUpdate(prevProps, prevState, snapshot) {
        // 在组件更新后被调用，表示组件的DOM已经更新完成
        // 接收三个参数：prevProps、prevState和snapshot。
        // 它们分别代表组件更新前的旧属性（props）、旧状态（state）以及从getSnapshotBeforeUpdate返回的快照信息。
        // 4.如果执行了setState函数，则触发DOM更新
        console.log('HelloWorld组件： 执行componentDidUpdate');
        console.log('prevProps', prevProps, 'prevState', prevState, 'snapshot', snapshot);
    }
    componentWillUnmount() {
        console.log('HelloWorld组件： 执行componentWillUnmount');
    }

    shouldComponentUpdate() {
        // 允许手动控制组件在更新过程中是否要重新渲染
        console.log('HelloWorld组件： 执行shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate() {
        // 在组件即将更新到DOM中之前被调用，允许你捕获当前DOM状态，并在更新后使用这些信息。
        console.log('HelloWorld组件： 执行getSnapshotBeforeUpdate');
        return {
            // 例如可以在某应用场景下缓存滚动的位置
            scrollPosition: 100
        }
    }
}

export default HelloWorld