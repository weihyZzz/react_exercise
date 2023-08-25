import { PureComponent } from "react";

// 定义组件：为一些需要特殊数据的组件注入props
function enhancedUserInfo(OriginComponent) {
    class NewComponent extends PureComponent {
        constructor(props) {
            // 通过props，支持组件本身也可以传递数据
            super(props)
            this.state = {
                userInfo: {
                    name: "weihy",
                    age: 20
                }
            }
        }
        render() {
            return <OriginComponent {...this.state.userInfo} {...this.props} />
        }
    }
    return NewComponent
}
export default enhancedUserInfo