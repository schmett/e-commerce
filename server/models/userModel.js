var db = require('../db/index.js');
// var bcrypt = require('bcrypt-nodejs');
// var Promise = require('bluebird');

module.exports = {
  users: {
    get: function (user,callback) {
      var query = 'Select id,name,email,address_id,birthday from users where name = "'+ user.username +'" and password = "'+user.password+'"';
      db.query(query, function(err, results) {
        console.log('sigini user ',results);
        callback(err, results);
      });
    },
    post: function (user, callback) {
      var queryAddress = 'insert into address (street, number, city, postalcode) values ("'+ user.address.street +'",'+user.address.number+',"'+user.address.city+'",'+user.address.postalcode+')';
      db.query(queryAddress, function(err, results) {
        console.log('Model signup address err', err);
        console.log('Model signup address results', results);
        var queryUser = 'insert into users (name,email,address_id,phoneNumber,birthday,password) values ("'+ user.username +'","'+user.email+'", (SELECT id FROM address WHERE postalcode= '+ user.address.postalcode+' and number = '+user.address.number+'),'+username.phoneNumber+',"'+user.birthday+'" ,"'+user.password+'")';
        db.query(queryUser, function(err, results) {
          console.log('Model signup user err', err);
          console.log('Model signup user results', results);
          callback(err, results);
        });
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

// insert into address (postalcode) values (94504);     
// insert into users (name,email,address_id,phoneNumber,birthday,type,password,item_Id) values ('John','john@john.com', (SELECT id FROM address WHERE postalcode=94101) ,48343432, '2015-6-9' ,'admin','password', (SELECT id FROM items WHERE name='laptop'));


