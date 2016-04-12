// var itemController = require('itemController.js');
// var userController = require('userController.js');
// var searchController = require('searchController.js');
var authController = require('./authController.js');
var Auth = require('../utility/util.js');
/* Routes */

module.exports = function(app) {


  app.post('/signup', authController.signup);

  app.post('/signin', authController.signin);

  // app.get('/users', checkAuth, userController.users);

  // app.post('/users', checkAuth, userController.users);

  // app.get('/items', checkAuth, itemController.items);

  // app.post('/items', checkAuth, itemController.items);

  // app.post('/search', checkAuth, searchController.search);
}



