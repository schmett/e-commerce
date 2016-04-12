var User = require('./userModel.js');

module.exports = {
  users: {
    get: function (req, res) {
      User.users.get(function(err, results) {
        if (!err) { 
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      User.users.post(params, function(err, results) {
        if (!err) { 
          res.sendStatus(201);
        }
      });
    }
  }
};