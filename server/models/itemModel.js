var db = require('../db');

module.exports = {
  items: function (userItem,callback) {
    console.log('AddItem body', userItem);

    var query = 'insert into items (name,description,price) values ("'+userItem.item.name+'","'+userItem.item.description+'",'+userItem.item.price+')';
    db.query(query, function(err, results) {
      query = 'insert into user_items (user_Id,item_Id) values ('+ userItem.id +',(select id from items where name = "'+userItem.item.name+'"))';
      db.query(query, function(err, results) {
        console.log(err);
        console.log(results);
        callback(err, results);
      });
    });
  }
};