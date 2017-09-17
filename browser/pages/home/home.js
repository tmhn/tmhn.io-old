"use strict";

import React from "react";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        padding: 0,
        margin: 0
    },
    leftPanel: {
        paddingRight: "35px"
    },
    rightPanel: {
        alignItems: "center",
        float: "right"
    },
    title: {
        fontSize: "65px",
        fontFamily: "Circular-Bold",
        color: "#FF5A5F",
        marginBottom: "0px",
        marginTop: 0
    },
    subtitle: {
        fontSize: "45px",
        fontFamily: "Circular-Light",
        marginTop: "0px",
        marginBottom: "20px"
    },
    intro: {
        fontFamily: "Circular-Light",
        marginTop: "25px"
    }
});

const Home = () =>
    <div className={css(styles.wrapper)}>
        <div className={css(styles.leftPanel)}>
            <img src="/images/tmwhn.jpg" />
        </div>
        <div className={css(styles.rightPanel)}>
            <p className={css(styles.title)}>Tom Hanson</p>
            <p className={css(styles.subtitle)}>Software Engineer</p>
            <p className={css(styles.intro)}>I work at SkyBet in Leeds</p>
            <p className={css(styles.intro)}>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React Native</li>
                    <li>ES6</li>
                </ul>
            </p>
            <p className={css(styles.intro)}>Find me on <a href="https://twitter.com/iTomHanson">Twitter</a>, on <a href="https://www.strava.com/athletes/tomhanson">Strava</a> or <a href="https://github.com/tmhn">GitHub</a></p>
        </div>
    </div>;

export default Home;
