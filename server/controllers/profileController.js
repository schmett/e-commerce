// Sylvia
var Profile = require('../models/profileModel.js');

// choose function below
module.exports = {
  getUserItems: function (req, res, next) {
    var params = req.params;
    Profile.profile(params, function(err, results) {
      if (!err) { 
        res.json(results);
      } else {
        res.json(err);
      }
    });
  }

  // post: function (req, res, next) {
  //   var params = req.params;
  //   Profile.profile(params, function(err, results) {
  //     if (!err) { 
  //       res.json(params);
  //     } else {
  //       res.json(err);
  //     }
  //   });
  // }

};