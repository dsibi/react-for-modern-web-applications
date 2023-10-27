import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

let isLoading = true;

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App isLoading={isLoading} />);
