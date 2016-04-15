// Sylvia
var Items = require('./itemModel.js');

// choose function below
module.exports = {

  get: function (req, res, next) {
    Items.items(function(err, results) {
      if (!err) { 
        res.json(201);
      } else {
        res.json(err);
      }
    });
  },
  
  post: function (req, res, next) {
    Items.items(function(err, results) {
      if (!err) { 
        res.json(201);
      } else {
        res.json(err);
      }
    });
  }

};