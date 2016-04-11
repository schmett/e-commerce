var itemController = require('itemController.js');
var userController = require('userController.js');
var searchController = require('searchController.js');

/* Routes */
module.exports = function(app) {

  app.get('/users', userController.users);

  app.post('/users', userController.users);

  app.get('/items', itemController.items);

  app.post('/items', itemController.items);

  app.post('/search', searchController.search);
}



