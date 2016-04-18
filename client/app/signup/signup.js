
//@Author: Jovani
//Controller for singup user

angular.module('e-Commer.signup', ['ngMaterial'])
.controller('signupController', function ($scope, $window, $location, Auth,$filter,$mdToast) {
//signin variable uses int the signup template
$scope.userform = {};
$scope.date;
$scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });

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
        .textContent('Account Created!')
        .position(pinTo )
        .hideDelay(3000)
    );
  };

  $scope.signup = function () {
    $scope.userform.birthday = $filter('date')($scope.date, 'yyyy-MM-dd');
    //call the signup factory method and pass the user form
    console.log($scope.userform.birthday);
    Auth.signup($scope.userform)
      .then(function () {
        $scope.showSimpleToast();
        $location.path('/signin');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});