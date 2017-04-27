"use strict";

import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFF",
        color: "#24CC82",
        border: "1.5px solid #24CC82",
        fontSize: "16px",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "10px",
        paddingBottom: "10px",
        ":hover": {
            backgroundColor: "#24CC82",
            border: "1.5px solid #24CC82",
            textDecoration: "none",
            color: "#FFF"
        },
        ":active": {
            backgroundColor: "#24CC82",
            border: "1.5px solid #24CC82",
            textDecoration: "none",
            color: "#FFF"
        }
    }
});

const ButtonLink = (dest, text) =>
    <Link to={dest} className={`btn btn-default ${css(styles.button)}`}>
        {text}
    </Link>;

export default ButtonLink;
