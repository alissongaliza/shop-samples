var express = require('express');
var router = express.Router();
var execSQLQuery = require('../helpers/execSQLQuery');


router.get("/", (req, res) => {
    execSQLQuery("SELECT * FROM Category", [], res);
});

router.post("/", (req, res) => {
    var data = [req.body.nameCategory];
    execSQLQuery(
        "INSERT INTO Category (nameCategory) VALUES(?)",
        data,
        res
    );
});

router.get("/:id", (req, res) => {
    var data = [req.params.idCategory];
    execSQLQuery(
        "SELECT * FROM Category WHERE idCategory = ?",
        data,
        res
    );
});

router.delete("/:id", (req, res) => {
    var data = [req.params.idCategory];
    execSQLQuery(
        "DELETE FROM Category WHERE idCategory = ?",
        data,
        res
    );
});

module.exports = router;