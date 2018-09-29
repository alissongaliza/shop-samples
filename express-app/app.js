var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser"); //json helper

var shop00Router = require('./routes/shop00')

var handlebars = require('express-handlebars')

var app = express();

//configuring usage of bodyParser (json helper)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
var hbs = handlebars.create({
  // Specify helpers which are only registered on this instance. 
  helpers: {
      list: function(context, options) {
        var ret = "<ul>";
      
        for(var i=0, j=context.length; i<j; i++) {
          ret = ret + "<li>" + options.fn(context[i]) + "</li>";
        }
      
        return ret + "</ul>";
      }
  }
});

app.engine('handlebars', hbs.engine);
// app.engine('handlebars', handlebars({defaultLayout: 'layout', extname: '.handlebars'}))



  
app.set('view engine', 'handlebars');
app.use(express.static('views'));

app.use('/shop00', shop00Router);

module.exports = app;
