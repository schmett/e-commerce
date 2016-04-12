var jwt = require('jwt-simple');
var User = require('../models/userModel.js');

module.exports = function checkAuth (req, res, next) {
    // checking to see if the user is authenticated
  // grab the token in the header is any
  // then decode the token, which we end up being the user object
  // check to see if that user exists in the database'
  var token = req.headers['x-access-token'];
  if (!token) {
    next(new Error('No token'));
  } else {
    var user = jwt.decode(token, 'secret');
    User.findUser({username: user.username}, function (err, foundUser) {
      if (foundUser) {
        next();
      } else {
        res.send(401);
      }
    });
  }
};

 // var token = req.headers['x-access-token'];
 //    var user;

 //    if (!token) {
 //      return res.send(403); // send forbidden if a token is not provided
 //    }

 //    try {
 //      // decode token and attach user to the request
 //      // for use inside our controllers
 //      user = jwt.decode(token, 'secret');
 //      req.user = user;
 //      next();
 //    } catch (error) {
 //      return next(error);
 //    }