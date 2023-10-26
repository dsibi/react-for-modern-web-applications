import ReactDOM from "react-dom/client";
import "./index.css";
import App, { IApp } from "./App";

let isLoading: IApp = { isLoading: false };

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(App(isLoading));
