import ThemeContext from "../context/theme_context"

function withTheme(OriginComponent) {
    // 高阶函数，用于为原始组件增添context
    return (props) => {
        return (
            <ThemeContext.Consumer>
                {
                    value => {
                        return <OriginComponent {...value} {...props} />
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}
export default withTheme