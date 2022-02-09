import React, { useState } from "react";

const WithCounter = (OriginalComponent, incrementCount = 1) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
      setCounter((counter) => counter + incrementCount);
    };

    return <OriginalComponent count={counter} handleCount={handleCounter} />;
  };
  return NewComponent;
};

export default WithCounter;
