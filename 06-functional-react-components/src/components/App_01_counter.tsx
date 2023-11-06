import { useState, useEffect } from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    console.log("fjhk", count);
    return () => console.log("unmount");
  }, [count]);

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <span style={{ margin: "0 0.5rem" }}>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Clicker;
