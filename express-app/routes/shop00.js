var express = require('express');
var router = express.Router();


var categoriesRouter = require('./category');
var productsRouter = require('./product');


router.use('/category', categoriesRouter);
router.use('/product', productsRouter);

router.get('/', function(req, res){
    console.log('check');
    
    res.render('index');
  });

module.exports = router;
