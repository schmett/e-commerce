// David
// Controller for adding items

angular.module('e-Commer.addItem', [])
.controller('addItemController', function ($scope, $window, $location, Item, Auth) {

$scope.itemForm = {};
$scope.user = Auth.user;

  $scope.addItem = function () {
    var info = {id:$scope.user.id, item:$scope.itemForm};
    console.log('Info info ',$scope.user);
    console.log(info);
    Item.addOne(info)
      .then(function () {
        $location.path('/items');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});