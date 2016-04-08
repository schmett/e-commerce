var db = require('../db');

module.exports = {
  search: {
    post: function (params, callback) {
      var query = '';
      db.query(query, params, function(err, results) {
        callback(err, results);
      });
    }
  };