import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseC() {
    setCount(count + 1);
  }
  function decreaseC() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1 style={{ color: "green" }}>{count}</h1>
      <button onClick={increaseC}>+</button>
      <button onClick={decreaseC}>-</button>
    </div>
  );
}

export default App;
