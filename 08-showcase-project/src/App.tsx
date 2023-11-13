import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";

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
