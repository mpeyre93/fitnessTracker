const db = require("../models");
const path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        //renders main page
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", (req, res) => {
        //renders exercise page
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", (req, res) => {
        //renders stats page
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}