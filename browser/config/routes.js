"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";

import Main from "../pages/main/main";
import Home from "../pages/home/home";

export default(
  <Route name="home" path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
