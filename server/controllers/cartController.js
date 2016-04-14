// Sylvia

var Cart = require('./cartModel.js');

// sync methods with cartModel
module.exports = {

  get: function (req, res, next) {
    Cart.get(function(err, results) {
      if (!err) {
        res.json(results);
      } else {
        res.json(err);
      }
    });
  }, 

  post: function (req, res, next) {
    Cart.post(function (err, results) {
      if (!err) {
        res.json(results);
      } else {
        res.json(err);
      }
    });
  }

};