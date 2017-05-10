var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function (req, res) {
  console.log('hey');
  res.render('index');
});

router.get('/api/burgers', function (req, res) {
  burger.selectAll(function (data) {
    res.json(data);
  })
});

router.post('/api/new', function (req, res) {
  var newBurger = req.body;
  burger.insertOne(newBurger, function (data) {
    res.json(data);
  })
})

router.put('/api/edit', function (req, res) {
  var burgerToUpdate = {
    burger: req.body.conditionVal
  };
  var updateValueObj = {};
  updateValueObj[req.body.col] = req.body.val;

  burger.updateOne(updateValueObj, burgerToUpdate, function (data) {
    res.json(data);
  });
})



module.exports = router;

