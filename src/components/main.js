import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./aboutme";
import Project from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={About} />
    <Route path="/projects" component={Project} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
