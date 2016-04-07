angular.module('signupServices', [])

// create factory Signup here
  .factory('Signup', function($http) {
  	var signup = function(user) {
  		return $http({
  			method: 'POST', 
  			// change url accordingly
  			url: 'api/users/signup', 
  			data: user
  		})
  		.then(function(resp) {
  			// session needs to be sent
  			return resp.data.session;
  		})
  	}

  	return {
  		signup: signup
  	}
  });


