// Sylvia
var Checkout = require('./checkoutModel.js');

// choose function below
module.exports = {

  get: function (req, res, next) {
    Checkout.checkout(function(err, results) {
      if (!err) {
        res.json(results);
      } else {
        res.json(err);
      }
    });
  }, 

  post: function (req, res, next) {
    Checkout.checkout(function (err, results) {
      if (!err) {
        res.json(results);
      } else {
        res.json(err);
      }
    });
  }

};