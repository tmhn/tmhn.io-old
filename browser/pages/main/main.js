"use strict";

import React from "react";
import { StyleSheet, css } from "aphrodite";
import Sidebar from "../../components/sidebar";
import Menu from "../../components/menu";

const styles = StyleSheet.create({
    container: {
        "@media (max-width: 5000px)": {
            paddingLeft: "200px"
        },
        "@media (max-width: 1120px)": {
            paddingLeft: "90px"
        },
        "@media (max-width: 767px)": {
            paddingLeft: 0
        }
    },
    mobileNavbar: {
        "@media (max-width: 5000px)": {
            display: "none"
        },
        "@media (max-width: 1120px)": {
            display: "none"
        },
        "@media (max-width: 767px)": {
            display: "block",
            paddingLeft: 0,
            minHeight: 60,
            border: 0
        }
    },
    content: {
        height: "100%",
        minHeight: "100%",
        paddingTop: "50px",
        paddingBottom: "100px",
        "@media (max-width: 1120px)": {
            width: "80%",
            paddingTop: "50px"
        },
        "@media (max-width: 767px)": {
            width: "96"
        }
    },
    sidebar: {
        "@media (max-width: 767px)": {
            paddingRight: "0"
        }
    }
});

const Main = props =>
    <div className="row">
        <div className={`col-lg-2 col-md-2 col-sm-2 col-xs-1 ${css(styles.sidebar)}`}>
            <Sidebar />
        </div>
        <div className={`col-lg-8 col-md-8 col-sm-8 col-xs-6 ${css(styles.content)}`}>
            <div className={css(styles.container)}>
                <Menu className={css(styles.mobileNavbar)} />
                {props.children}
            </div>
        </div>
    </div>;

export default Main;
