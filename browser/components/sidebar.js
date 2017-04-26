"use strict";

import React from "react";
import { Link } from "react-router";
import { StyleSheet, css } from "aphrodite";
import { HART, BROWNLEE } from "../global/sizes";
import { WHITE, NEVIS } from "../global/colors";
import content from "../content/site";

const styles = StyleSheet.create({
    menu: {
        backgroundColor: NEVIS,
        height: "100%",
        width: "300px",
        fontFamily: "Avenir",
        paddingRight: "20px",
        paddingTop: "50px",
        paddingLeft: "20px",
        position: "fixed",
        textAlign: "right",
        color: WHITE,
        "@media (max-width: 1120px)": {
            width: "200px"
        },
        "@media (max-width: 767px)": {
            display: "none"
        }
    },
    subbar: {
        paddingTop: `${HART}px`
    },
    brand: {
        color: WHITE,
        textDecoration: "none",
        ":focus": {
            color: WHITE,
            textDecoration: "none"
        },
        ":hover": {
            color: WHITE,
            textDecoration: "none"
        }
    },
    linkHeading: {
        marginTop: BROWNLEE
    },
    link: {
        color: WHITE,
        textDecoration: "none",
        ":hover": {
            color: WHITE
        }
    }
});

const Sidebar = () => <div className={css(styles.menu)}>
        <h2><Link to="/" className={css(styles.brand)}>{content.site.fullName}</Link></h2>
        <h5>
            <a href={content.site.instagram.address} className={css(styles.brand)}>
                {content.site.instagram.name}
            </a>
        </h5>
        <hr className="navDivider" />
        <div className={css(styles.subbar)}>
            {content.pageLinks.map(({ name, address }, index) =>
                <h4 key={index} className={css(styles.linkHeading)}>
                    <Link to={address} className={css(styles.link)}>{name}</Link>
                </h4>
            )}
        </div>
    </div>;

export default Sidebar;
