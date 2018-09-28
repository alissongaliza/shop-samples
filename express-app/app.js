var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser"); //json helper

var shop00Router = require('./routes/shop00')

var hb = require('express-handlebars')

var app = express();

//configuring usage of bodyParser (json helper)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

app.engine('hb', hb({defaultLayout: 'layout'}))
app.set('view engine', 'handlebars');


app.use('/shop00', shop00Router);

module.exports = app;
