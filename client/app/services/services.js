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
      // add an item from a user
      addOne: function(item) {
        return $http({
          method: 'POST',
          url: '/items/add',
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
          url: '/items/delete'
        })
        .then(function (resp) {
          return resp;
        });
      }     
    }  
  })

  .factory('User', function ($http) {
    return {
      // adds a user to the database
      addOne: function(user) {
        return $http({
          method: 'POST',
          url: '/users/add',
          data: user
        })
        .then(function (resp) {
          console.log(resp);
          return resp;
        })
      },

      //deletes user from database
      deleteOne: function(user) {
        return $http({
          method: 'POST',
          url: '/users/delete'
        })
        .then(function (resp) {
          return resp;
        });
      },

      //returns a user 
      getUser: function(user) {
        return $http({
          method: 'GET',
          url: 'users/get'
        })
        .then(function (resp) {
          return resp.data;
        })
      }
    }
  })

  .factory('Signup', function ($http) {
    var signup = function(user) {
      return $http({
        method: 'POST', 
        // change url accordingly
        url: '/signup', 
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