import { styled } from "styled-components";
import { middleSize, primaryColor } from "./style/variables"
export const AppWrapper = styled.div`
  .footer {
    color: skyblue;
    border: 1px solid #133f76;
  }
`;

// 2.子元素单独抽取到一个样式组件
// 3.接受外部传入props
// 4.采用attrs给标签模版字符串提供属性
// 5.从单独的文件引入变量

export const SectionWrapper = styled.div.attrs(props => {
    // 注意写法
    return {
        tColor: props.color || "blue"
    }
})`
  color: #1ebf97;
  border: 1px solid black;
  .title {
    font-size: ${props => props.size}px;
    color: ${props => props.tColor};
  }
  /* 可以引入js文件中的变量 */
  .content {
    font-size: ${middleSize};
    color: ${primaryColor};
  }
`;
