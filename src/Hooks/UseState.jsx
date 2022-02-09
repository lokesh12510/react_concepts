import React, { useState } from "react";

const btn = {
  padding: "10px 20px",
  backgroundColor: "#f6f6f6",
  fontSize: "18px",
};

const UseState = ({ handleCount, count }) => {
  const handleCounter = () => {
    handleCount("child comp");
  };

  return (
    <>
      <h2>Counter</h2>
      <button style={btn} onClick={handleCounter}>
        Count : {count}
      </button>
    </>
  );
};

export default UseState;
