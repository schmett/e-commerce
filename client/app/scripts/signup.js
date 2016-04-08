angular.module('signup', [])

// Signup factory is stored as Signup
  .controller('SignupController', function($scope, $window, $location, Signup) {
    $scope.user = {};

    $scope.signup = function() {
      // inject factory
      Signup.signup($scope.user)
      // user session to be created
        .then(function (session) {
          // exact path to be determined
          // $window.localStorage.setItem('...', session);
          // exact path to be determined
          $location.path('/');
        })
        .catch(function(error) {
          console.error(error);
        });
      };
  });


