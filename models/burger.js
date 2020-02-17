var orm = require("../config/orm");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
    insertOne: function (cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res)
      });
  },
  // update an existing burger
    updateOne: function (updatedObject, condition, cb) {
      orm.updateOne("burgers", updatedObject, condition, function(res) {
        cb(res)
      });
  }
  
};
  // Export the database functions for the controller.
  module.exports = burger;