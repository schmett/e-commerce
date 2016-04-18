// Sylvia
var Profile = require('../models/profileModel.js');

// choose function below
module.exports = {
  getUserItems: function (req, res, next) {
    var params = req.query.id;
    console.log('params', params);
    
    Profile.profile(params, function(err, results) {
      if (!err) { 
        res.json(results);
      } else {
        res.json(err);
      }
    });
  }
};