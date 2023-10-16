import React, { memo, useDeferredValue, useState } from "react";
import arrayData from "./arrayData";
const App = memo(() => {
  const [companyNames, setCompanyNames] = useState(arrayData);
  const deferCompanyNames = useDeferredValue(companyNames);
  function valueChangeHandle(event) {
    const keyword = event.target.value;
    // 筛选出包含关键词的数组项
    const filterCompanyNames = arrayData.filter((item) =>
      item.includes(keyword)
    );
    setCompanyNames(filterCompanyNames);
  }
  return (
    <div>
      <input type="text" onInput={(e) => valueChangeHandle(e)} />
      <h2>公司列表 </h2>
      <ul>
        {deferCompanyNames.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default App;
