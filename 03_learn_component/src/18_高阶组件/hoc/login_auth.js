import { PureComponent } from "react";

function LoginAuth(OriginComponent) {
    return props => {
        // 从localStorage获取token
        const token = localStorage.getItem("token")
        console.log('token', token);
        if(token) {
            return <OriginComponent {...props}/>
        } else {
            return <h2>请登录</h2>
        }         
    }
}
export default LoginAuth