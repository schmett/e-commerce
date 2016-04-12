var db = require('../db/index.js');
// var bcrypt = require('bcrypt-nodejs');
// var Promise = require('bluebird');

module.exports = {
  users: {
    get: function (user,callback) {
      var query = 'Select name,password from users where name = "'+ user.username +'" and password = "'+user.password+'"';
      db.query(query, function(err, results) {
        callback(err, results);
      });
    },
    post: function (user, callback) {
      var query = 'insert into users (name,email,password) values ("'+ user.username +'","'+user.email+'","'+user.password+'")';
      db.query(query, function(err, results) {
        console.log('Model err', err);
        console.log('Model results', results);
        callback(err, results);
      });
    }
  },
  findUser: function(user, callback) {
    var query = 'Select token from Users where username = "'+ user.username +'"';
    db.query(query, function(err, results) {
      callback(err, results);
    });
  }
};
