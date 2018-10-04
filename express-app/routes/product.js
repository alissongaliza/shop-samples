var express = require("express");
var router = express.Router();
var execSQLQuery = require("../helpers/execSQLQuery");
var parcialExecSQL = require("../helpers/parcialExecSQL");

router.get("/", (req, res) => {
    execSQLQuery("SELECT * FROM Product", [], res, function (results) {
        console.log(results);

        res.render("index", { products: results });
    });
});

router.post("/", (req, res) => {
    var data = [req.body.nameProduct];
});

router.get("/:id", (req, res) => {
    var data = [req.params.idProduct];
    execSQLQuery("SELECT * FROM Product WHERE idProduct = ?", data, res);
});

router.delete("/:id", (req, res) => {
    var data = [req.params.idProduct];
    execSQLQuery("DELETE FROM Product WHERE idProduct = ?", data, res);
});

module.exports = router;
