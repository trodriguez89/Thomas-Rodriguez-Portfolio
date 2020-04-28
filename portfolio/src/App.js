import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} />
        <Route path="/" component={AboutMe} />
        <Route path="/" component={Projects} />
        <Route path="/" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
