var db = require('../db');

var NUM_ITEMS = 5;

module.exports = {
  profile: function (userId, callback) {
    var obj = {};
    console.log(userId);
    var queryUserItems = '';
    

    db.query(queryUserItems, function(err, results) {
      console.log('profile query err',err);
      console.log('profile query results',results);
      callback(err, results);
    });
  }
};