// 高阶组件 withRouter: 用于在类组件中使用react-router的hook函数
import { useNavigate, useParams, useLocation, useSearchParams } from "react-router-dom"
function withRouter(WrapperComponent) {
    return function(props) {
        const navigate = useNavigate()
        const params = useParams()
        const location = useLocation()
        const [searchParams] = useSearchParams()

        // 1.获取查询字符串的参数(通过get方式，)
        const name = searchParams.get("name")
        const school = searchParams.get("school")
        console.log('name:', name,'school:', school);

        // 2.将searchParams转换为普通obj
        const query = Object.fromEntries(searchParams)
        console.log('query:', query);
        // 包装要传递给原始组件的参数
        const router = { navigate, params, location, query }
        return <WrapperComponent {...props} router={router} />
    }
}

export default withRouter