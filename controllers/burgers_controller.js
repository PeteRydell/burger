var express = require("express");

var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      res.render("index", { burgers: data });
    });
  });
  
  router.post("/burgers/insert", function (req, res) {
    console.log(req.body);

    burger.insertOne(req.body, function (data) {
        res.redirect("/");
    });
  });
  
  router.put("/burgers/:id", function (req, res) {
    // var updateBurger = { burger_name: "" };
    burger.updateOne({ devoured: 1 }, req.params.id, function (data) {
        res.sendStatus(200);
    });
  });

// Export routes for server.js to use.
module.exports = router;