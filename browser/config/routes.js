"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";

import Main from "../pages/main/main";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Projects from "../pages/projects/projects";
import Contact from "../pages/contact/contact";

// - Projects
import DoppioProject from "../pages/projects/doppio";
import WebAppsProject from "../pages/projects/web-apps";

export default(
  <Route name="home" path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route name="about" path="about" component={About} />
    <Route name="contact" path="contact" component={Contact} />
    <Route name="projects" path="projects" component={Projects} />
    <Route name="projects/doppio" path="projects/doppio" component={DoppioProject} />
    <Route name="projects/web-apps" path="projects/web-apps" component={WebAppsProject} />
  </Route>
);
