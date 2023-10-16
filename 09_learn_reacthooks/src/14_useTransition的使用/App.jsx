import React, { memo, useState, useTransition } from "react";
import arrayData from "./arrayData";
const App = memo(() => {
  const [companyNames, setCompanyNames] = useState(arrayData);
  const [pending, setTransition] = useTransition();
  function valueChangeHandle(event) {
    const keyword = event.target.value;
    // 将一部分比较复杂的逻辑延后执行
    setTransition(() => {
      // 筛选出包含关键词的数组项
      const filterCompanyNames = arrayData.filter((item) =>
        item.includes(keyword)
      );
      setCompanyNames(filterCompanyNames);
    });
  }
  return (
    <div>
      <input type="text" onInput={(e) => valueChangeHandle(e)} />
      <h2>公司列表 {pending && <span>pending...</span>}</h2>
      <ul>
        {companyNames.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default App;
