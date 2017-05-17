var db = require('../models');

function routes(app) {

  app.get('/', function (req, res) {
    db.Burger.findAll({ include: [db.Customer]}).then(function (data) {
      var burgerObj = {
        burgers: data
      };
      console.log(data);
      res.render('index', burgerObj);
    });
  });

  app.get('/api/burgers', function (req, res) {
    db.Burger.findAll().then(function (data) {
      res.json(data);
    })
  });

  app.post('/api/new', function (req, res) {
    function createABurger(newBurger) {
      db.Burger.create(newBurger).then(function () {
        res.redirect('/');
      })
    }

    const newBurger = { burger_name: req.body.burger_name };
    newBurger.devoured = false;
    db.Customer.findOne({ where: { customer: req.body.customer } }).then(function (data) {
      if (data) {
        newBurger.CustomerId = data.id;
        createABurger(newBurger);
      } else {
        db.Customer.create({ customer: req.body.customer }).then(function (data) {
          newBurger.CustomerId = data.id;
          createABurger(newBurger);
        })
      }
    })
  })

  app.put('/api/devour', function (req, res) {
    // console.log('body', req.body, req.params, req.data);

    const burgerToUpdate = {
      id: req.body.id
    };
    const updateValueObj = {
      devoured: true
    };
    db.Customer.findOne({ where: { customer: req.body.customer }, include: [db.Burger] }).then(function (data) {
      if (data) {

        if (data.Burgers[0].burger_name === req.body.burger_name) {
          db.Burger.update(updateValueObj, { where: burgerToUpdate }).then(function (data) {
            console.log('eat burger');
            res.json({ message: 'Burger eaten by ' + req.body.customer });
          });
        } else { 
          console.log('dont eat burger');
          res.json({ message: 'That is not your burger!' });
        }
      } else {
        res.json({ message: 'You haven\'t ordered any burgers!' });
      }
    });
  })
}



module.exports = routes;