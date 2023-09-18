// 高阶组件 withRouter: 用于在类组件中使用react-router的hook函数
import { useNavigate, useParams } from "react-router-dom"
function withRouter(WrapperComponent) {
    return function(props) {
        const navigate = useNavigate()
        const params = useParams()
        console.log('navigate', navigate);
        console.log('params', params);

        // 包装要传递给原始组件的参数
        const router = { navigate, params }
        return <WrapperComponent {...props} router={router} />
    }
}

export default withRouter