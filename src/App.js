import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import axios from "axios";

function App() {
  const apiCall = () => {
    axios.get("./data.json")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}
apiCall()
  return (
    <Router>
      <div>
      <Jumbotron />
      <Navbar logo="./images/logo.png"/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      <Footer />
      </div>
    </Router>
  )
}

export default App;
