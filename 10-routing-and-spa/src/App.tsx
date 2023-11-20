import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Category from "./pages/Category/Category";
import Recipe from "./pages/Recipe/Recipe";

// const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Fragment>
      <Router basename="/react-for-modern-web-applications">
        <Header />
        <main className="container content">
          <Routes>
            {/* <Suspense fallback={<h2>Loading...</h2>}> */}
            <Route path="/" element={<Home />} />
            {/* </Suspense> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id/" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
