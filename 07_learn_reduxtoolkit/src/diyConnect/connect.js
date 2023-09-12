import { PureComponent } from "react"
// 不需要再引入项目中的store,实现了手写connect函数与store的解耦
// import store from "../store"
import { StoreContext } from "./StoreContext"
// 优化版本，只有当 Redux store 中的数据实际发生变化时，
// 才会触发组件重新渲染。这可以减少不必要的渲染，提高性能。

export  function connect(mapStateToProps, mapDispatchToProps) {
    return function(WrapperComponent) {
        class NewComponent extends PureComponent {
            constructor(props, context) {
                super(props)

                this.state = mapStateToProps(context.getState())
            }
            componentDidMount() {
                // 进行数据订阅
                this.unsubscribe = this.context.subscribe(() => {
                    this.setState(mapStateToProps(this.context.getState()))
                })
            }

            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                const stateObj = mapStateToProps(this.context.getState())
                const dispatchObj = mapDispatchToProps(this.context.dispatch)
                return <WrapperComponent { ...this.props } { ...stateObj } { ...dispatchObj }/>
            }
        }
        NewComponent.contextType = StoreContext
        return NewComponent
    }
}