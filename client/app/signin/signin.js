//@Author: Jovani
//Controller for the singin user

angular.module('e-Commer.signin', [])
.controller('signinController', function ($scope, $window, $location, Auth) {
//signin variable uses int the signin template
$scope.userLogin = {};

  $scope.signin = function () {
    console.log($scope.userLogin.username);
    //call the signin factory method and pass the user form
    Auth.signin($scope.userLogin)
      .then(function (token) {
        $window.localStorage.setItem('com.e-Commer', token);
        $location.path('/homepage');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});