// Sylvia
var Items = require('../models/itemModel.js');


// choose function below
module.exports = {
  // get: function (req, res, next) {
  //   Items.items(function(err, results) {
  //     if (!err) { 
  //       res.json(201);
  //     } else {
  //       res.json(err);
  //     }
  //   });
  // },
  
  addItem: function (req, res, next) {
    console.log('Inside addItem method');
    Items.items(req.body,function(err, results) {
      if (!err) { 
        res.json(201);
      } else {
        res.json(err);
      }
    });
  }

};