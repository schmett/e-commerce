var app = angular.module('e-Commer.search', []);

app.controller('SearchController', function ($scope, searchFactory) {
  $scope.initData = {};
  $scope.initData.location = 94101;
  $scope.initData.items = 'golf club';
  $scope.initData.dates = new Date();
  console.log($scope.initData);
  // console.log($scope.showBorA);
  searchFactory.getRandItems($scope.initData);
});

app.controller('subController', function($scope) {
  $scope.showBorA = true;
  console.log($scope.initData);
});

app.factory('searchFactory', function($http) {
  return {
    getRandItems: function(inputValue) {
      return $http({
        method: 'POST',
        url: '/api/getRandItems',
        data: inputValue
      }).then(function(res) {
        // match res.data with server side
        res.end(res.data);
      });
    }
  }
})