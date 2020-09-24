import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Details from "./pages/Details";
// import Info from './pages/Info';

function App() {
  
  return (
    <Router>
      <div>
      <Navbar logo="./images/logo.png"/>
        <Switch>
          <Route exact path={["/", "/home"]} title={"about"} component={About} />
          <Route exact path="/portfolio" title={"portfolio"} component={Portfolio} />
          <Route exact path="/project" title={"project"} component={Project} />
          <Route exact path="/contact" title={"contact"} component={Contact} />  
          <Route path="/portfolio/:id" component={Details} />
        </Switch>
      <Footer />
      </div>
    </Router>
  )
}

export default App;
