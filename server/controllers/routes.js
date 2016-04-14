// var itemController = require('itemController.js');
// var userController = require('userController.js');
// var searchController = require('searchController.js');
var authController = require('./authController.js');
var Auth = require('../utility/util.js');
var homeController = require('./homepageController.js');
/* Routes */

module.exports = function(app) {

  // app.get('/', function(req, res) {
  //   res.render('index');
  // })

  app.post('/signup', authController.signup);

  app.post('/signin', authController.signin);

  app.post('/api/getSearchItems', homeController.search);

  // app.get('/users', checkAuth, userController.users);

  // app.post('/users', checkAuth, userController.users);

  // app.get('/items', checkAuth, itemController.items);

  // app.post('/items', checkAuth, itemController.items);

  // app.post('/search', checkAuth, searchController.search);
}



