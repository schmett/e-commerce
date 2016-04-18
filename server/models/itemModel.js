var db = require('../db');

module.exports = {
  items: function (userItem,callback) {
    var query = 'insert into items (name,description,price) values ("'+userItem.item.name+'","'+userItem.item.description+'",'+userItem.item.price+')';
    db.query(query, function(err, results) {
      query = 'insert into user_items (user_Id,item_Id) values ('+ userItem.id +',(select id from items where name = "'+userItem.item.name+'" Limit 1))';
      db.query(query, function(err, results) {
        console.log('Item', results);
        console.log('err Item', err);
        callback(err, results);
      });
    });
  }
};