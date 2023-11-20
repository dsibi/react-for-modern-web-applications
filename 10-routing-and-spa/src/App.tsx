import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Category from "./pages/Category/Category";
import Recipe from "./pages/Recipe/Recipe";

function App() {
  return (
    <Fragment>
      <Router basename="/react-for-modern-web-applications">
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
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
