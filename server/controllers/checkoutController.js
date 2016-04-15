// Sylvia
var Checkout = require('../models/checkoutModel.js');

// choose function below
module.exports = {
  // get: function (req, res, next) {
  //   Checkout.checkout(function(err, results) {
  //     if (!err) {
  //       res.json(results);
  //     } else {
  //       res.json(err);
  //     }
  //   });
  // }, 

  setItems: function (req, res, next) {
    Checkout.checkout(req.body,function (err, results) {
      if (!err) {
        res.json(results);
      } else {
        res.json(err);
      }
    });
  }

};