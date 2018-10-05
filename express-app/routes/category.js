var express = require('express');
var router = express.Router();
var execSQLQuery = require('../helpers/execSQLQuery');
var parcialExecSQL = require('../helpers/parcialExecSQL');
var _ = require('lodash');


router.get("/", (req, res) => {
    execSQLQuery("SELECT * FROM Category", [], res);
});

router.post("/", (req, res) => {
    var data = [req.body.nameCategory];

    console.log(data);

    execSQLQuery(
        "INSERT INTO Category (nameCategory) VALUES(?)",
        data,
        res, () => {
            execSQLQuery("SELECT Product.*, Category.nameCategory FROM Product " +
                " INNER JOIN Category ON Category.idCategory = Product.idCategory ", [], res, function (results) {
                    // console.log(results);

                    var products = [];
                    results.slice().map(x => {
                        products.push({
                            idProduto: x.idProduct, nameProduct: x.nameProduct, priceProduct: x.priceProduct,
                            descriptionProduct: x.descriptionProduct
                        });
                    });
                    // console.log(products);

                    var categories =
                        _.chain(results)
                            .uniqBy('nameCategory')
                            // .map( x=> {x.nameCategory})
                            .value();
                    // results.slice().map(x => {
                    //     categories.push(`${x.categoryName}`);
                    // });
                    // console.log(categories);

                    res.render("index", { "products": products, "categories": categories });
                });
        }
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