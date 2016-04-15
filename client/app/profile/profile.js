var app = angular.module('e-Commer.checkOut', []);

app.controller('profileCtrl', function($scope, checkOutFac) {
 $scope.info = {};
}).factory('checkOutFac', function($http) {
 var receiveDataFromServer = function() {
   return $http({
     method: 'GET',
     url: '/api/getAllUserItem'
   }).then(function(res) {
     $scope.info = res.data;
     console.log($scope.info);
     return $scope.info;
   });
 }
});