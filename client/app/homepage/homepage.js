var app = angular.module('e-Commer.search', []);

app.controller('SearchController', function ($scope, $window, searchFactory) {
  // this is for SEARCH FORM after LOGIN
  $scope.initData = {};
  

  // $scope.randItemsData = searchFactory.getSearchItems({default:'default'});
  // console.log('Data ',$scope.randItemsData);
  searchFactory.getSearchItems({default:'default'}).then(function(items){
    $scope.randItemsData = items;
  });
 

  $scope.getFormValue = function() {
    $scope.randItemsData = {};
    $scope.initData.location = $scope.location;
    $scope.initData.item = $scope.item;
    // $scope.initData.dates = $scope.dates;
    console.log($scope.initData);
    searchFactory.getSearchItems($scope.initData).then(function(items){
    $scope.randItemsData = items;
    });
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

});

app.controller('subController', function($scope) {
  /*
  * Problem: show or hide form based on what? token or ?
  * solution 1: save token to db
   */
  $scope.showBorA = true;
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
        console.log(res.data);
        return res.data;
      });
    }
    // getRandItems: function() {
    //   return $http({
    //     method: 'GET',
    //     url: '/api/getRandItems'
    //   }).then(function(res) {
    //     return res.data;
    //   })
    // }
  }
})