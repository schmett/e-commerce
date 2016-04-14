// Sylvia
var Item = require('./itemModel.js');

// sync with methods from itemModel
module.exports = {

  get: function (req, res, next) {
    Item.get(function(err, results) {
      if (!err) { 
        res.json(201);
      } else {
        res.json(err);
      }
    });
  },
  
  post: function (req, res, next) {
    Item.post(function(err, results) {
      if (!err) { 
        res.json(201);
      } else {
        res.json(err);
      }
    });
  }

};