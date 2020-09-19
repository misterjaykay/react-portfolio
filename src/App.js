import React from "react";
import { BrowserRouter as Router, Route } from 'react-route-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  )
}

export default App;
