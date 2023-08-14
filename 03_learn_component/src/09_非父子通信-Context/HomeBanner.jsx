import ThemeContext from "./context/theme-context";
function HomeBanner() {
  return (
    <div>
      <span>HomeBanner</span>
      {/* 函数式组件使用consumer的方式来访问context共享的数据 */}
      <ThemeContext.Consumer>
        {(value) => {
          return <h2>{value.color}</h2>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}
export default HomeBanner;
