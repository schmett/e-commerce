angular.module('commerce.services', [])
  
  .factory('Location', function ($http) {
    return {
      getOne: function() {
        return $http({
          method: 'GET',
          url: '/api/locations'
        })
        .then(function (resp) {
          return resp.data;
        });
      },

      addOne: function(location) {
        return $http({
          method: 'POST',
          url: '/api/locations',
          data: location
        })
        .then(function (resp) {
          console.log(resp);
          return resp;
        });
      }
    }
  })

  .factory('Items', function ($http) {
    return {
      getAll: function() {
        return $http({
          method: 'GET',
          url: '/api/items'
        })
        .then(function (resp) {
          return resp.data;
        });
      },

      addOne: function(item) {
        return $http({
          method: 'POST',
          url: '/api/items',
          data: item
        })
        .then(function (resp) {
          console.log(resp);
          return resp;
        });
      },

      delete: function() {
        
      }
    }
  })