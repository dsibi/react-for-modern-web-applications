import { useState } from "react";
import Clicker from "./components/App_01_counter";

function App() {
  const [isClicker, setClicker] = useState(false);

  return (
    <div className="App">
      <h2>React App</h2>
      <button onClick={() => setClicker(!isClicker)}>Toggle Clicker</button>
      {isClicker && <Clicker />}
    </div>
  );
}

export default App;
