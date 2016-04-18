// David
// Controller for adding items

angular.module('e-Commer.addItem', ['ngMaterial'])
.controller('addItemController', function ($scope, $window, $location, Item, Auth,$mdToast) {

$scope.itemForm = {};
$scope.user = Auth.user;

var last = {
      bottom: true,
      top: false,
      left: false,
      right: true
    };
  $scope.toastPosition = angular.extend({},last);
  $scope.getToastPosition = function() {
    sanitizePosition();
    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };
  function sanitizePosition() {
    var current = $scope.toastPosition;
    if ( current.bottom && last.top ) current.top = false;
    if ( current.top && last.bottom ) current.bottom = false;
    if ( current.right && last.left ) current.left = false;
    if ( current.left && last.right ) current.right = false;
    last = angular.extend({},current);
  }

 $scope.showSimpleToast = function() {
    var pinTo = $scope.getToastPosition();
    $mdToast.show(
      $mdToast.simple()
        .textContent('Item Saved!')
        .position(pinTo )
        .hideDelay(3000)
    );
  };


  $scope.addItem = function () {
    var info = {id:$scope.user.id, item:$scope.itemForm};
    Item.addOne(info)
      .then(function () {
        $scope.showSimpleToast();
        $location.path('/items');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});