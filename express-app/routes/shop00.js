var express = require('express');
var router = express.Router();


var categoriesRouter = require('./category');
var productsRouter = require('./product');


router.use('/category', categoriesRouter);
router.use('/product', productsRouter);

router.get("/", (req, res) => {
    console.log("test succeded");
});

module.exports = router;
