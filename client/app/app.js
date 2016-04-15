//@Author: Jovani

var app = angular.module('e-Commer', [
  'e-Commer.signup',
  'e-Commer.signin',
  'e-Commer.search',
  'e-Commer.services',
  // 'e-Commer.checkOut',
  'ngRoute'
]);

// create the route for every template and set a controller
app.config(function ($routeProvider,$httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/signin/signin.html',
      controller: 'signinController'
    })
    .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'signupController'
    })
    .when('/homepage', {
      templateUrl: 'app/homepage/homepage.html',
      controller: 'SearchController'
      // authenticate: true
    })
    .when('/homepage/cart', {
      templateUrl: 'app/checkout/checkOut.html',
      controller: 'SearchController'
      // authenticate: true
    })
    .otherwise({
      redirectTo: '/homepage'
    });
  $httpProvider.interceptors.push('AttachTokens');
})
// //Code for store the Token in the client
.factory('AttachTokens', function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.e-Commer');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  // here inside the run phase of angular, our services and controllers
  // have just been registered and our app is ready
  // however, we want to make sure the user is authorized
  // we listen for when angular is trying to change routes
  // when it does change routes, we then look for the token in localstorage
  // and send that token to the server to see if it is a real user or hasn't expired
  // if it's not valid, we then redirect back to signin/signup
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/homepage');
    }
  });
});