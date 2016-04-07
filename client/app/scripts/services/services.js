angular.module('commerce.services', [])
  
  .factory('Search', function ($http) {
    return {
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

      deleteOne: 
    }
  })
