import React, { memo } from "react";
import { useParams } from "react-router-dom";

const Users = memo(() => {
  const params = useParams();
  console.log("params", params);
  return (
    <div>
      <h2>id: {params.id}</h2>
    </div>
  );
});

export default Users;
