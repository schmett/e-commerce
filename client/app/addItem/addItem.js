// David
// Controller for adding items

angular.module('e-Commer.addItem', [])
.controller('addItemController', function ($scope, $window, $location, Item) {

$scope.itemForm = {};

  $scope.addItem = function () {
    
    Item.addOne($scope.itemForm)
      .then(function () {
        $location.path('/items');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});