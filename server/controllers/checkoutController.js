// Sylvia
var Checkout = require('../models/checkoutModel.js');

// choose function below
module.exports = {
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