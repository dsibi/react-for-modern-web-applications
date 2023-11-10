import { Context } from "./hooks/Context";
import { Books } from "./comp/Books";

function App() {
  return (
    <Context>
      <Books />
    </Context>
  );
}

export default App;
