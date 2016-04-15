// var itemController = require('itemController.js');
// var userController = require('userController.js');
// var searchController = require('searchController.js');
var authController = require('./authController.js');
var Auth = require('../utility/util.js');
var homeController = require('./homepageController.js');
var itemController = require('./itemController.js');
var profileController = require('./profileController.js');
var checkoutController = require('./checkoutController.js');
/* Routes */

module.exports = function(app) {

  // app.get('/', function(req, res) {
  //   res.render('index');
  // })

  app.post('/signup', authController.signup);

  app.post('/signin', authController.signin);

  app.post('/api/getSearchItems', homeController.search);

  app.post('/items/add', itemController.addItem);

  app.get('/api/getAllUserItem', profileController.getUserItems);

  app.post('/homepage/cart', checkoutController.setItems);

  // app.post('/users', checkAuth, userController.users);

  // app.get('/items', checkAuth, itemController.items);

  // app.post('/items', checkAuth, itemController.items);

  // app.post('/search', checkAuth, searchController.search);
}



