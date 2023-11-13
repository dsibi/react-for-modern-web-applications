import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";

function App() {
  return (
    <Fragment>
      <Header />
      <Shop />
      <Footer />
    </Fragment>
  );
}

export default App;
