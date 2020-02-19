var connection = require("../config/connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ";";
    connection.query(queryString, function (err, result) {
        // if error throw err
        if (err) {
          throw err;
        }
        cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function (tableName, obValues, condition, cb) {
    var queryString = 'UPDATE' + table;

    queryString += " SET ";
    queryString += inputSql(obValues);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
        if (err) { 
          throw err;
        }
        cb(result);
    });
  }
  };
  
  module.exports = orm;