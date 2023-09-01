import { styled } from "styled-components"

export const ButtonWrapper = styled.button`
    border: 1px solid green;
    border-radius: 5px;
`
// styled中样式的继承
export const PlusButtonWrapper = styled(ButtonWrapper)`
    background-color: pink;
`


export const HomeWrapper = styled.div`
    .title {
        /* 使用styled-components中的ThemeProvider提供的数据 */
        color: ${props => props.theme.homeColor};
        font-size: ${props => props.theme.homeSize};
    }
`