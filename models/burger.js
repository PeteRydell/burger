var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function (newDataObject, cb) {
      orm.insertOne("burgers", newDataObject, cb);
  },
  // update an existing burger
  updateOne: function (updatedDataObject, id, cb) {
      orm.updateOne("burgers", updatedDataObject, id, cb);
  }
  };
  
  // Export the database functions for the controller (burgerController.js).
  module.exports = burger;