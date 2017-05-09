var express = require('express');
var burger = require('../models/burger.js');

var app = express();

function htmlRoutes() {
  app.get('/', function (req, res) {
    
  });
}

function apiRoutes() {
  
}

var router = {
  htmlRoutes: htmlRoutes,
  apiRoutes: apiRoutes
}

module.exports = router;

