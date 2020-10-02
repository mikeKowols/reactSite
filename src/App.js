import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, FizzPop, Home, SampleWork,Resume, APICall, BaseballGame, TeamSearch, NewsFeed, Contact } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/APICall" exact component={() => <APICall />} />
		  <Route path="/BaseballGame" exact component={() => <BaseballGame />} />
		  <Route path="/Contact" exact component={() => <Contact />} />
		  <Route path="/FizzPop" exact component={() => <FizzPop />} />
		  <Route path="/NewsFeed" exact component={() => <NewsFeed />} />
		  <Route path="/Resume" exact component={() => <Resume />} />
		  <Route path="/SampleWork" exact component={() => <SampleWork />} />
          <Route path="/TeamSearch" exact component={() => <TeamSearch />} />        
		</Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

 

 
  