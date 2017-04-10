"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const compression = require("compression");

const app = express();
const host = process.env.HOST || "http://localhost:";
const port = process.env.PORT || 8080;
const url = `${host}${port}`;

app.use(compression());
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

// Keep this route as the last one
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

function renderMain(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
}

app.get("/", renderMain);

app.listen(port, () => {
    console.log(`Listening at: ${url}`); // eslint-disable-line no-console
});
