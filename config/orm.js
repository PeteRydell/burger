var connection = require("../config/connection");

function inputSql(ob) {
  var arr = [];

  for (let key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf("") >= 0){
        value = "" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function (tableInput, cb) {
    // creates sql query
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
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  updateOne: function (tableName, updatedDataObject, id, cb) {
    var queryString = 'UPDATE ?? SET ? WHERE id = ?'
    connection.query(queryString, [tableName, updatedDataObject, id], function (err, result) {
        if (err) throw err;
        cb(result);
    });
  }
  };
  
  module.exports = orm;