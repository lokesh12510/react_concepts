import React from "react";
import WithCounter from "./WithCounter";

const ClickCounter = ({ count, handleCount }) => {
  return (
    <>
      <button onClick={handleCount}>Counter {count}</button>
    </>
  );
};

export default WithCounter(ClickCounter, 20);
