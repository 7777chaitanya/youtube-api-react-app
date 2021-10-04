import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavBar, HomePageGrid } from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <HomePageGrid />
          </Route>
          

        </Switch>
      </Router>
    </div>
  );
};

export default App;
