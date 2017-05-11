var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function (req, res) {
  console.log('hey');
  burger.selectAll(function (data) { 
    var burgerObj = { burgers: data };
    console.log(burgerObj);
    res.render('index', burgerObj);
  });
});

router.get('/api/burgers', function (req, res) {
  burger.selectAll(function (data) {
    res.json(data);
  })
});

router.post('/api/new', function (req, res) {
  var newBurger = req.body;
  newBurger.devoured = false;
  console.log(newBurger);
  burger.insertOne(newBurger, function () {
    res.redirect('/');
  })
})

router.put('/api/devour', function (req, res) {
  console.log(req.body);
  var burgerToUpdate = { burger_name: req.body.burger_name };
  var updateValueObj = { devoured: true };

  burger.updateOne(updateValueObj, burgerToUpdate, function () {
    res.redirect('/');
  });
})



module.exports = router;

