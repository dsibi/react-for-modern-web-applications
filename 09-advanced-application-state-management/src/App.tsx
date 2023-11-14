import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import { ContextProvider } from "./context";

function App() {
  return (
    <Fragment>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
