//============== Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");

var burgersController = require('./controllers/burgers_controller')

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', burgersController)

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () { 
    console.log('Listening on http://localhost:' + PORT);
})