//============== Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");

var db = require("./models");
var burgersController = require('./controllers/burgers_controller')


var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

burgersController(app);

var PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});