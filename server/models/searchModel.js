var db = require('../db');

var NUM_ITEMS = 5;

module.exports = {
  search: {
    getAllRandom: function (callback) {
      var queryId = 'SELECT MAX(id) FROM items';
      db.query(queryId, function(err, results) {
        if (!err) {
          var queryItems = 'SELECT * FROM items ORDER BY RAND() LIMIT '+ NUM_ITEMS;
          db.query(query, params, function(err, results) {
            callback(err, results);
          });
        }
      });
    },
    getAllItems: function (userSearch, callback) {
      var query = 'select i.id,i.name,i.description,i.price,i.availability from items i inner join users s on i.id = s.item_Id inner join address a on a.id  = s.address_id and a.postalcode = '+userSearch.location+' where i.name = "'+ userSearch.item+'"';
      db.query(query, function(err, results) {
        callback(err, results);
      });
    }
  };


// select i.id,i.name,i.description,i.price,i.availability from items i inner join users s on i.id = s.item_Id inner join address a on a.id  = s.address_id and a.postalcode = 94111;