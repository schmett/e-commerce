var User = require('./userModel.js');


module.exports = {
  users: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  }
};