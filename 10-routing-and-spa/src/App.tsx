import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

function App() {
  return (
    <Fragment>
      <Header />
      <Preloader />
      <Footer />
    </Fragment>
  );
}

export default App;
