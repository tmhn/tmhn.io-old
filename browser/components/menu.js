"use strict";

import React from "react";
import { Link } from "react-router";
import { css, StyleSheet } from "aphrodite";
import content from "../content/site";

const styles = StyleSheet.create({
    navbarBrand: {
        fontSize: 25,
        fontFamily: "Avenir",
        color: "#fff"
    },
    navbarMenu: {
        backgroundColor: "#24CC82",
        "@media (max-width: 5000px)": {
            display: "none"
        },
        "@media (max-width: 1120px)": {
            display: "none"
        },
        "@media (max-width: 767px)": {
            display: "block",
            paddingLeft: 0
        }
    },
    navbarLinks: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Avenir",
        lineHeight: 2
    },
    navbarHeader: {
        paddingTop: 8,
        paddingLeft: 5
    }
});

const Menu = () =>
    <nav
        className={`navbar navbar-default navbar-fixed-top ${css(styles.navbarMenu)}`}
    >
        <div className="container-fluid">
            <div className={`navbar-header ${css(styles.navbarHeader)}`}>
                <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className={`navbar-brand ${css(styles.navbarBrand)}`} to="/">Tom Hanson</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    {content.pageLinks.map(({ name, address }, index) =>
                        <li
                            key={index}
                            eventKey={index}
                        >
                            <Link
                                to={address}
                                className={css(styles.navbarLinks)}
                                data-toggle="collapse"
                                data-target=".navbar-collapse"
                            >
                                {name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </nav>;

export default Menu;
