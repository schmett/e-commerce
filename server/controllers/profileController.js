// Sylvia
var Profile = require('./profileModel.js');

// sync methods with profileModel.js
module.exports = {

  get: function (req, res, next) {
    var params = req.params;
    Profile.get(params, function(err, results) {
      if (!err) { 
        res.json(params);
      } else {
        res.json(err);
      }
    });
  },
  post: function (req, res, next) {
    var params = req.params;
    Profile.post(params, function(err, results) {
      if (!err) { 
        res.json(params);
      } else {
        res.json(err);
      }
    });
  }

};