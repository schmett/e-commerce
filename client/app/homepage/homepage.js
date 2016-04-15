var app = angular.module('e-Commer.search', []);

app.controller('SearchController', function ($scope,$location, $window, searchFactory, Auth) {
  // this is for SEARCH FORM after LOGIN
  $scope.allItems = {};
  $scope.checkOutItems = searchFactory.checkOutItems;
  $scope.checkOutCounter = 0;
  $scope.user = Auth.user;

  searchFactory.getSearchItems({default:'default'}).then(function(items){
    $scope.randItemsData = items;
  });

  $scope.logout = function (){
    Auth.signout();
  }
 
  $scope.addToCheckOut = function(item) {
    $scope.checkOutItems.push(item);
    $scope.checkOutCounter++;
  }

  $scope.processCheckOut = function() {
    //Send the Cart to the server
    var checkoutData = {id:$scope.user.id, items:$scope.checkOutItems};
    searchFactory.sendToSubCtrl(checkoutData).then(function(response){
    });
    $location.path('/homepage');
  }

  $scope.getSum = function() {
    var i = 0,
      sum = 0;
    for(; i < $scope.checkOutItems.length; i++) {
      sum += parseInt($scope.checkOutItems[i].price, 10);
    }
    return sum;
  };

  $scope.deleteItem = function(index) {
    $scope.checkOutItems.splice(index,1);
  };

  $scope.getFormValue = function() {
    $scope.randItemsData = {};
    $scope.allItems.location = $scope.location;
    $scope.allItems.item = $scope.item;
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
    return a ? true : false;
  }

}).controller('subController', function($scope) {
  $scope.showBorA = true;
});

app.factory('searchFactory', function($http) {
  // var checkoutArr;
    var checkOutItems = [];
    var getSearchItems = function(inputValue) {
      return $http({
        method: 'POST',
        url: '/api/getSearchItems',
        data: inputValue
      }).then(function(res) {
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
        return res.data;
      });
    }
  return {
      checkOutItems : checkOutItems,
      getSearchItems: getSearchItems,
      sendToSubCtrl: sendToSubCtrl
    }
  })

