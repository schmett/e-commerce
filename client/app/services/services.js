angular.module('e-Commer.services', [])
  
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
    // var user = {};
    return {
      user: user,
      getUser: function(){
        return this.user;
      },
      // adds a user to the database
      addOne: function(user) {
        return $http({
          method: 'POST',
          url: '/users/add',
          data: user
        })
        .then(function (resp) {
          console.log(resp);
          // this.user = resp.data;
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

//@Author: Jovani
//factory for Authentication, signup and signin methods
  .factory('Auth', function ($http, $location, $window) {
    var user;
    return {
      user:user,
      getProperty: function () {
          return user;
      },
      setProperty: function(value) {
          user = value;
      },
      //signup method for make a request and send the user info to the server
      signup : function(user) {
        return $http({
          method: 'POST', 
          url: '/signup', 
          data: user
        });
      },
      //signin method for make a request and send the user info to the server
      signin : function (user) {
        console.log('Client---------',user);
        return $http({
          method: 'POST',
          url: '/signin',
          data: user
        })
        .then(function (resp) {
          // resp.data.user[0]
          console.log('User info',resp.data);
          return resp.data;
        })
        .catch(function(err){
          console.log(err);
        });
      },

      isAuth: function () {
        return !!$window.localStorage.getItem('com.e-Commer');
      },
      signout: function () {
        $window.localStorage.removeItem('com.e-Commer');
        $location.path('/homepage');
      }
    }
  });