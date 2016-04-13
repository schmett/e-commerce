var app = angular.module('e-Commer.search', []);

app.controller('SearchController', function ($scope, $window, searchFactory) {
  
  //get random data
  $scope.randItemsData = searchFactory.getRandItems();
  // this is for SEARCH FORM after LOGIN
  $scope.initData = {};
 

  $scope.getFormValue = function() {
    $scope.initData.location = $scope.location;
    $scope.initData.items = $scope.items;
    $scope.initData.dates = $scope.dates;
    console.log($scope.initData);
    return searchFactory.getSearchItems($scope.initData);
  }

  $scope.formRender = function() {
    // this is to get token and based on token val, we toggle or hide views
    var a = $window.localStorage.getItem('com.e-Commer');
    /*
    Now just checking for the token from localStorage. Must be compared with db token for security issues
     */
    console.log(a);
    return a ? true : false;
  }
  
  // after login sending form data
  searchFactory.getSearchItems($scope.initData);
});

app.controller('subController', function($scope) {
  /*
  * Problem: show or hide form based on what? token or ?
  * solution 1: save token to db
   */
  $scope.showBorA = true;

  console.log($scope.initData);
});

app.factory('searchFactory', function($http) {
  return {
    getSearchItems: function(inputValue) {
      return $http({
        method: 'POST',
        url: '/api/getSearchItems',
        data: inputValue
      }).then(function(res) {
        // match res.data with server side
        // res.end(res.data);
        
        res.end(data);
      });
    },
    getRandItems: function() {
      return $http({
        method: 'GET',
        url: '/api/getRandItems'
      }).then(function(res) {
        return res.data;
      })
    }
  }
})