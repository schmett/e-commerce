var Item = require('./itemModel.js');


module.exports = {
  items: {
    get: function (req, res) {
      Item.items.get(function(err, results) {
        if (!err) { 
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      Item.items.post(params, function(err, results) {
        if (!err) { 
          res.sendStatus(201);
        }
      });
    }
  }
};