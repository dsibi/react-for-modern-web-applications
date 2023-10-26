import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

interface IBook {
  name: string;
  subtitle: string;
  year: number;
  children?: string;
}

const Book = (props: IBook) => {
  return (
    <div id={props.name}>
      <h2>{props.name}</h2>
      <p>{props.subtitle}</p>
      <p>{props.year}</p>
      <p>{props.children}</p>
      {/* <br /> */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Book name="BlaBlaBla1" subtitle="BlaBlaBla" year={2023}>
        children
      </Book>
      <Book name="BlaBlaBla10" subtitle="BlaBlaBla" year={2023} />
      <Book name="BlaBlaBla100" subtitle="BlaBlaBla" year={2023} />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(App());
