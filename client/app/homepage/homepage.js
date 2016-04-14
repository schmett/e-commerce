var app = angular.module('e-Commer.search', []);

app.controller('SearchController', function ($scope, $window, searchFactory) {
  // this is for SEARCH FORM after LOGIN
  $scope.allItems = {};
  $scope.checkOutItems = [];
  $scope.checkOutCounter = 0;

  // $scope.randItemsData = searchFactory.getSearchItems({default:'default'});
  // console.log('Data ',$scope.randItemsData);
  searchFactory.getSearchItems({default:'default'}).then(function(items){
    $scope.randItemsData = items;
  });
 
  $scope.addToCheckOut = function(item) {
    // console.log(item);
    $scope.checkOutItems.push(item);
    $scope.checkOutCounter++;
    // sendToSubCtrl()
    // checkOutService.sendToSubCtrl($scope.checkOutItems);
    // console.log('addToCheckOut items', $scope.checkOutItems);
    return item;
  }

  $scope.processCheckOut = function() {
    console.log('process hceck out', $scope.checkOutItems);

    return searchFactory.sendToSubCtrl($scope.checkOutItems);
  }

  // $scope.processCheckOut = function() {
  //   console.log('process hceck out', 
  //     $scope.checkOutItems);
  //   return searchFactory.sendToSubCtrl($scope.checkOutItems);
  // }

  $scope.getFormValue = function() {
    $scope.randItemsData = {};
    $scope.allItems.location = $scope.location;
    $scope.allItems.item = $scope.item;
    // $scope.allItems.dates = $scope.dates;
    console.log($scope.allItems);
    searchFactory.getSearchItems($scope.allItems).then(function(items){
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

  // $scope.processCheckOut = function() {
  //   console.log('process hceck out', $scope.checkOutItems);

  //   return searchFactory.sendToSubCtrl($scope.checkOutItems);
  // }

}).controller('subController', function($scope) {

  // * Problem: show or hide form based on what? token or ?
  // * solution 1: save token to db
  
   
  // var a = $window.localStorage.getItem('com.e-Commer');
  $scope.showBorA = true;

  // $scope.processCheckOut = function() {
  //   console.log('clicked from subCtrl');

  //   // return searchFactory.sendToSubCtrl($scope.checkOutItems);
  // }
  // console.log($scope.checkOutItems, 'subctrl');
});

// app.controller('checkOut', function($scope) {
//   // $scope.checkOutItems = searchFactory.getCheckOutItems();
//   console.log($scope.checkOutItems);
// })

app.factory('searchFactory', function($http) {
  // var checkoutArr;
    var getSearchItems = function(inputValue) {
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

    var sendToSubCtrl = function(checkoutData) {
      return $http({
        method: 'POST',
        url: '/homepage/cart',
        data: checkoutData
      })
      .then(function(res) {
        console.log(res.data);
        return res.data;
      });
    }
  return {
      getSearchItems: getSearchItems,
      sendToSubCtrl: sendToSubCtrl
    }
    // getCheckOutItems: function() {
    //   console.log(checkoutArr, 'from fact');
    //   return checkoutArr;
    // }
    // 
    // 
    // 
    // getRandItems: function() {
    //   return $http({
    //     method: 'GET',
    //     url: '/api/getRandItems'
    //   }).then(function(res) {
    //     return res.data;
    //   })
    // }
  })

