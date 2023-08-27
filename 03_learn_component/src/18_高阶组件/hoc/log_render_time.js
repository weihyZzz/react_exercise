import { PureComponent } from "react";

function logRenderTime(OriginComponent) {
    
    return class NewComponent extends PureComponent {
        componentWillMount() {
            this.beginTime = new Date().getTime()
        }
        componentDidMount() {
            this.endTime = new Date().getTime()
            const interVal = this.endTime - this.beginTime
            console.log(OriginComponent.name, '页面','渲染时间', interVal,'ms');
        }
        render() {
            return <OriginComponent />
        }
    }
}
export default logRenderTime