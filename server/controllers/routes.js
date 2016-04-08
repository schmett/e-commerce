var linksController = require('controllers/itemController.js');
var userController = require('controllers/userController.js');
var userController = require('controllers/searchController.js');

/* Routes */
module.exports = function(app) {
  app.get('/', function(req, res) {
   res.render("index");
  });

  app.get('/users', userController.user);

  app.post('/users', userController.user);

  app.get('/items', itemController.items);

  app.post('/items', itemController.items);

  app.post('/search', searchController.search);
}



