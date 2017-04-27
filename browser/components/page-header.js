"use strict";

import React from "react";
import { StyleSheet, css } from "aphrodite";
import * as Color from "../global/colors";

const styles = StyleSheet.create({
    header: {
        backgroundColor: Color.WHITE,
        fontFamily: "Avenir",
        paddingTop: "50px",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingBottom: "50px",
        marginBottom: "25px",
        marginTop: "40px",
        "@media (max-width: 767px)": {
            paddingTop: "5px",
            paddingLeft: "20px",
            paddingBottom: "5px",
            marginBottom: "15px",
            marginTop: "30px"
        }
    },
    heading: {
        color: Color.NEVIS,
        "@media (max-width: 767px)": {
            fontSize: "25px"
        }
    }
});

const PageHeader = props => <div className={css(styles.header)}>
        <h2 className={css(styles.heading)}>{props.text}</h2>
    </div>;

export default PageHeader;
