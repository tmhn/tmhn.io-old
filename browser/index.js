"use strict";

import React from "react";
import { Router, browserHistory } from "react-router";
import ReactDOM from "react-dom";
import routes from "./config/routes";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../public/css/style.css";

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById("app"));
