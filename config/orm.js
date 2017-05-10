var connection = require('./connection');

function selectAll(table, callback) {
  connection.query('SELECT * FROM ' + table, function (err, data) {
    if (err) throw err;
    callback(data);
  });
}

function insertOne(table, colValObj, callback) {
  connection.query('INSERT INTO ' + table + ' SET ?', colValObj, function (err, data) {
    if (err) throw err;
    callback(data);
  });
}

function updateOne(table, colValObj, conditionObj, callback) {
  connection.query('UPDATE ' + table + ' SET ?? = ? WHERE ?? = ?', [colValObj.col, colValObj.val, conditionObj.col, conditionObj.val],  function (err, data) {
    if (err) throw err;
    callback(data);
  })
}

var orm = {
  selectAll: selectAll,
  updateOne: updateOne,
  insertOne: insertOne
}

module.exports = orm; 