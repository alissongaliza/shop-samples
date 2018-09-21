var express = require('express');
var router = express.Router();
var execSQLQuery = require('../helpers/execSQLQuery');


router.get("/", (req, res) => {
    execSQLQuery("SELECT * FROM Product", [], res);
});

router.post("/", (req, res) => {
    var data = [req.body.nameProduct];
    execSQLQuery(
        "INSERT INTO Product (nameProduct, priceProduct, descriptionProduct) VALUES(?,?,?)",
        data,
        res
    );
});

router.get("/:id", (req, res) => {
    var data = [req.params.idProduct];
    execSQLQuery(
        "SELECT * FROM Product WHERE idProduct = ?",
        data,
        res
    );
});

router.delete("/:id", (req, res) => {
    var data = [req.params.idProduct];
    execSQLQuery(
        "DELETE FROM Product WHERE idProduct = ?",
        data,
        res
    );
});

module.exports = router;