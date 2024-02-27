import { useState } from "react";

const Counter = () => {
  // useState returns, State Variable and State Setter function
  const [count, setCount] = useState(0);

  // Should not call the setter function at the render level
  // setCount(count + 1);

  const handleCounter = () => {
    // 1. Trigger the re-render
    // 2. Render the component in the virtual DOM
    // 3. Commit that changes to the Real DOM
    setCount((prevState) => prevState + 1);

    // Setter function is the async type function
    console.log(count); // Prev Count value
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCounter}>+</button>
    </div>
  );
};

export default Counter;
