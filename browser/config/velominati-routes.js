const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const data = JSON.parse(fs.readFileSync(
    path.join(__dirname, "/../content/velominati-rules.json")));
const ramda = require("ramda");

router.get("/api/velominati", function(req, res) {
    res.json(data);
});
router.get("/api/velominati/:id", function(req, res) {
    const ruleId = req.params.id;
    let result;
    if (ruleId > 0 && ruleId < 96) {
        result = ramda.find(ramda.propEq("id", parseInt(ruleId)))(data);
    } else {
        result = { message: "Out of bounds" };
    }
    res.json(result);
});

module.exports = router;
