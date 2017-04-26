"use strict";

import React from "react";
import Sidebar from "../../components/sidebar";
import Menu from "../../components/menu";

const Main = props =>
    <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-1 sidebar">
            <Sidebar />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-6 content">
            <div className="containerFluid">
                <Menu className="mobileNavbar" />
                {props.children}
            </div>
        </div>
    </div>;

export default Main;
