import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";

const UserInfo = memo(() => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  console.log("searchParams", searchParams);
  const queryObj = Object.fromEntries(searchParams);
  console.log("queryObj", queryObj);
  return (
    <div>
      <h2>
        用户信息 id:{id} | name:{name}
      </h2>
    </div>
  );
});

export default UserInfo;
