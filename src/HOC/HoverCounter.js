import React from "react";
import WithCounter from "./WithCounter";

const HoverCounter = ({ count, handleCount }) => {
  return (
    <div>
      <h3 onMouseOver={handleCount}>Hover Count : {count}</h3>
    </div>
  );
};

export default WithCounter(HoverCounter,5);
