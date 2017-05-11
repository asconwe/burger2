// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    console.log('in burger select all')
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(colValObj, cb) {
    orm.insertOne("burgers", colValObj, function(res) {
      cb(res);
    });
  },
  updateOne: function (updateValueObj, itemToUpdate, cb) {
    console.log(updateValueObj, itemToUpdate);
    orm.updateOne("burgers", updateValueObj, itemToUpdate, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;