import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, SampleWork,Resume, APICall, TeamSearch, NewsFeed } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/SampleWork" exact component={() => <SampleWork />} />
          <Route path="/APICall" exact component={() => <APICall />} />
		  <Route path="/resume" exact component={() => <Resume />} />
		  <Route path="/TeamSearch" exact component={() => <TeamSearch />} />
		  <Route path="/NewsFeed" exact component={() => <NewsFeed />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

 

 
  