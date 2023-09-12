import { PureComponent } from "react"
import store from "../store"

// connect是一个高阶函数，它接受多个函数作为参数，并且它的返回值也是一个函数，
// 返回的这个函数本身是一个高阶组件
// export default function connect(mapStateToProps, mapDispatchToProps) {
//     return function(WrapperComponent) {
//         class NewComponent extends PureComponent {
//             componentDidMount() {
//                 // 进行数据订阅
//                 this.unsubscribe = store.subscribe(() => {
//                     this.forceUpdate()
//                 })
//             }

//             componentWillUnmount() {
//                 this.unsubscribe()
//             }
//             render() {
//                 const stateObj = mapStateToProps(store.getState())
//                 const dispatchObj = mapDispatchToProps(store.dispatch)
//                 return <WrapperComponent { ...this.props } { ...stateObj } { ...dispatchObj }/>
//             }
//         }
//         return NewComponent
//     }
// }

// 优化版本，只有当 Redux store 中的数据实际发生变化时，
// 才会触发组件重新渲染。这可以减少不必要的渲染，提高性能。

export default function connect(mapStateToProps, mapDispatchToProps) {
    return function(WrapperComponent) {
        class NewComponent extends PureComponent {
            constructor(props) {
                super(props)

                this.state = mapStateToProps(store.getState())
            }
            componentDidMount() {
                // 进行数据订阅
                this.unsubscribe = store.subscribe(() => {
                    this.setState(mapStateToProps(store.getState()))
                })
            }

            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                const stateObj = mapStateToProps(store.getState())
                const dispatchObj = mapDispatchToProps(store.dispatch)
                return <WrapperComponent { ...this.props } { ...stateObj } { ...dispatchObj }/>
            }
        }
        return NewComponent
    }
}