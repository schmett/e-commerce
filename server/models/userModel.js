var db = require('../db');

module.exports = {
  users: {
    get: function (callback) {
      var query = '';
      db.query(query, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var query = '';
      db.query(query, params, function(err, results) {
        callback(err, results);
      });
    }
  };