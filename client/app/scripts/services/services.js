angular.module('commerce.services', [])
  
  .factory('Search', function ($http) {
    return {
      // get array of search inputs and return the results
      getAll: function(search) {
        return $http({
          method: 'POST',
          url: '/search',
          data: search
        })
        .then(function (resp) {
          return resp.data;
        });
      },

    }
  })
   
  .factory('Item', function ($http) {
    return {
      addOne: function(item) {
        return $http({
          method: 'POST',
          url: '/item',
          data: item
        })
        .then(function (resp) {
          console.log(resp);
          return resp;
        });
      },

      deleteOne: function(item) {
        return $http({
          method: 'POST',
          url: '/item'
        })
        .then(function (resp) {
          return resp;
        });
      }     
    }  
  })

  .factory('User', function ($http) {
    return {
      addOne: function(user) {
        return $http({
          method: 'POST',
          url: '/users',
          data: user
        })
        .then(function (resp) {
          console.log(resp);
          return resp;
        })
      },

      deleteOne: function(item) {
        return $http({
          method: 'POST',
          url: '/item'
        })
        .then(function (resp) {
          return resp;
        });
      }
    }
  })

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