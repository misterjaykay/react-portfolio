import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import axios from "axios";
import Resume from './pages/Resume';
import DataContext from "./utils/DataContext";
import CompleteContext from './utils/CompleteContext';
import IncompleteContext from './utils/IncompleteContext';

function App() {
  const [work, setWork] = useState([]);
  const [doneProj, setDoneProj] = useState([]);
  const [workingProj, setWorkingProj] = useState([]);

    useEffect(() => {
        axios.get("./data.json")
        .then(res => {
            setWork(res.data.portfolio);
            setDoneProj(res.data.project[0].done);
            setWorkingProj(res.data.project[1].working);
        })
        .catch(err => console.log('error',err));
    },[])
  return (
    <Router>
      <div>
      <DataContext.Provider value={work}>
      <CompleteContext.Provider value={doneProj}>
      <IncompleteContext.Provider value={workingProj}>
        <Navbar logo="./images/logo.png"/>
          <Switch>
            <Route exact path={["/", "/home"]} title={"about"} component={About} />
            <Route exact path="/portfolio" title={"portfolio"} component={Portfolio} />
            <Route exact path="/project" title={"project"} component={Project} />
            <Route exact path="/contact" title={"contact"} component={Contact} />  
            <Route exact path="/resume" title={"resume"} component={Resume} />
            <Route exact path="/portfolio/:id" title={"portfolio"} component={Details} />
          </Switch>
        <Footer />
      </IncompleteContext.Provider>
      </CompleteContext.Provider>
      </DataContext.Provider>
      </div>
    </Router>
  )
}

export default App;
