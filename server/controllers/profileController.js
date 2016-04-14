// Sylvia
var Profile = require('./profileModel.js');

// choose function below
module.exports = {

  get: function (req, res, next) {
    var params = req.params;
    Profile.profile(params, function(err, results) {
      if (!err) { 
        res.json(params);
      } else {
        res.json(err);
      }
    });
  },

  post: function (req, res, next) {
    var params = req.params;
    Profile.profile(params, function(err, results) {
      if (!err) { 
        res.json(params);
      } else {
        res.json(err);
      }
    });
  }

};