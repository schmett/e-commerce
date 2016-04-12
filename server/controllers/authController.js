var User = require('../models/userModel.js');
var jwt = require('jwt-simple');

module.exports = {
  signin: function (req, res, next) {
    var user = req.body;
    User.users.post(user, function(err, results){
      if (!err) {
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
      }
      res.json(err);
    })
  },
  signup: function (req, res, next) {
    var user = req.body;
    User.users.post(user, function(err, results){
      if (!err) {
        res.end(201);
      }
      res.json(err);
    });
  }
};