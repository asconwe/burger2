var db = require('../models');

function routes(app) {

  app.get('/', function(req, res) {
    console.log('hey');
    db.Burger.findAll().then(function(data) {
      var burgerObj = {
        burgers: data
      };
      console.log(burgerObj);
      res.render('index', burgerObj);
    });
  });

  app.get('/api/burgers', function(req, res) {
    db.Burger.findAll().then(function(data) {
      res.json(data);
    })
  });

  app.post('/api/new', function(req, res) {
    var newBurger = req.body;
    newBurger.devoured = false;
    console.log(newBurger);
    db.Burger.create(newBurger).then(function() {
      res.redirect('/');
    })
  })

  app.put('/api/devour', function(req, res) {
    console.log(req.body);
    var burgerToUpdate = {
      id: req.body.id
    };
    var updateValueObj = {
      devoured: true
    };

    db.Burger.update(updateValueObj, { where: burgerToUpdate }).then(function() {
      res.redirect('/');
    });
  })
}



module.exports = routes;