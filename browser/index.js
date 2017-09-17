"use strict";

import React from "react";
import { Router, browserHistory } from "react-router";
import ReactDOM from "react-dom";
import routes from "./config/routes";

import "../public/css/style.css";

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById("app"));
