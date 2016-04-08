var Search = require('./searchModel.js');


module.exports = {
  search: {
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      Search.search.post(params, function(err, results) {
        if (!err) { 
          res.sendStatus(201);
        }
      });
    }
  }
};