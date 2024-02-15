import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
        <Redirect to="https://ahmadbilalamjad.vercel.app/" />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
        </Router>
    </>
  );
}
