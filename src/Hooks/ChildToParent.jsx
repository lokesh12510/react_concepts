import React, { useState } from "react";
import UseState from "./UseState";

const ChildToParent = () => {
  const [count, setCount] = useState("parent");

  const handleCount = (data) => {
    setCount(data);
  };

  return (
    <>
      <div>This is {count}</div>
      <UseState handleCount={handleCount} count={count} />
    </>
  );
};

export default ChildToParent;
