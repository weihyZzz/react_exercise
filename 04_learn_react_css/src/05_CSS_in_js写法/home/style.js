import { styled } from "styled-components"

export const HomeWrapper = styled.div`
    .title {
        /* 使用styled-components中的ThemeProvider提供的数据 */
        color: ${props => props.theme.homeColor};
        font-size: ${props => props.theme.homeSize};
    }
`