var db = require('../db');

var NUM_ITEMS = 5;

module.exports = {
  checkout: function (userItems, callback) {
    // var userItems={id: 1, items:[{id:2},{id:3},{id:4}]};
    var queryUserItems = 'insert into items_renting (user_Id,item_Id) values ('+userItems.id+','+userItems.items[0].id+')';
    for (var i = 1; i < userItems.items.length; i++) {
      var itemId = userItems.items[i].id;
      queryUserItems += ',('+userItems.id+','+itemId+')';
    }
    db.query(queryUserItems, function(err, results) {
      callback(err, results);
    });
  }
};