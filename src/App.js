import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Resume, APICall } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
		  <Route path="/APICall" exact component={() => <APICall />} />
		  <Route path="/resume" exact component={() => <Resume />} />
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;

 

 
  