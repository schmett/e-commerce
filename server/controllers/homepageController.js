// this needs to change according to the homepageModel
var Search = require('../models/searchModel.js');

module.exports = {

  	search: function(req, res, next) {
      var search = req.body;
      // see how these are defined on the client side
      console.log(req.body);
      if (req.body.default) {
      	Search.search.getAllRandom(function(err, results) {
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
};
