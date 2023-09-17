// 高阶组件 withRouter: 用于在类组件中使用react-router的hook函数
import { useNavigate } from "react-router-dom"
function withRouter(WrapperComponent) {
    return function(props) {
        const navigate = useNavigate()
        
        // 包装要传递给原始组件的参数
        const router = { navigate }
        return <WrapperComponent {...props} router={router} />
    }
}

export default withRouter