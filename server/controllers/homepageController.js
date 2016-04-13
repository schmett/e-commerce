// this needs to change according to the homepageModel
var User = require('../models/searchModel.js');

module.exports = {

  search: {
  	post: function(req, res, next) {
      var search = req.body;
      // see how these are defined on the client side
      if (req.body.location === 'default' && req.body.items === 'default' && req.body.availability === 'default') {
      	Search.search.getAllRandom(search, function(err, results) {
      		if (!err) {
      			res.json(results);
      		} else {
      			res.json(err);
      		}
      	})
      } else {
      	Search.search.getAllItems(search, function(err, results) {
      		if (!err) {
      			res.json(results);
      		} else {
      			res.json(err);
      		}
      	})
      }

    }  
  }
};
