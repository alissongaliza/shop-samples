var express = require('express');
var router = express.Router();
var execSQLQuery = require('../helpers/execSQLQuery');
var _ = require('lodash')


var categoriesRouter = require('./category');
var productsRouter = require('./product');


router.use('/category', categoriesRouter);
router.use('/product', productsRouter);

router.get('/', function (req, res) {

    execSQLQuery("SELECT Product.*, Category.nameCategory FROM Product " +
        " INNER JOIN Category ON Category.idCategory = Product.idCategory ", [], res, function (results) {
            // console.log(results);

            var products = [];
            results.slice().map(x => {
                products.push({idProduto: x.idProduct , nameProduct: x.nameProduct, priceProduct: x.priceProduct,
                descriptionProduct: x.descriptionProduct});
            });
            console.log(products);
            
            var categories = _.chain(results)
                .uniqBy('nameCategory')
                .map( x=> {x.nameCategory})
                .value();
            // results.slice().map(x => {
            //     categories.push(`${x.categoryName}`);
            // });
            console.log(categories);

            res.render("index", { "products": products, "categories": categories });
        });
});

module.exports = router;
