
//@Author: Jovani
//Controller for singup user

angular.module('e-Commer.signup', [])
.controller('signupController', function ($scope, $window, $location, Auth) {
//signin variable uses int the signup template
$scope.userform = {};

  $scope.signup = function () {
    //call the signup factory method and pass the user form
    Auth.signup($scope.userform)
      .then(function (token) {
        $window.localStorage.setItem('com.e-Commer', token);
        $location.path('/homepage');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});