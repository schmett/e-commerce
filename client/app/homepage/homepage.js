var app = angular.module('e-Commer.search', ['ngMaterial'])
.config(function($mdThemingProvider) {
  

  var neonRedMap = $mdThemingProvider.extendPalette('red', {
    '500': '#10aeb2',
    '600': '#79BFA1',
    'contrastDefaultColor': 'dark'
  });
  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('neonRed', neonRedMap);
  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('neonRed');

  $mdThemingProvider.theme('dark-light-green').backgroundPalette('neonRed');

});

app.controller('SearchController', function ($scope,$location, $window, searchFactory, Auth,$mdDialog) {
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
    $scope.checkOutCounter++
  }

  $scope.processCheckOut = function() {
    //Send the Cart to the server
    console.log('transfering you to paypal server..');
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


  $scope.showConfirm = function(ev,item) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like to delete this item?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('delete')
          .cancel('cancel');
    $mdDialog.show(confirm).then(function() {
      $scope.status = 'You decided to get rid of your debt.';
      $scope.deleteItem(item);
    }, function() {
      $scope.status = 'You decided to keep your debt.';
    });
  };




  $scope.open = function(){
    $mdDialog.show({
      template: "<md-dialog id=\"listing-share-dialog\" aria-label=\"Share Property\"><md-toolbar><div class=\"md-toolbar-tools\"><h1>Share Property With</h1></div></md-toolbar><form id=\"listing-share\" novalidate=\"\" name=\"listingShareForm\" style=\"overflow: hidden;\"><div><md-content><md-tabs md-stretch-tabs=\"true\" md-no-pagination=\"true\" md-dynamic-height=\"true\" md-border-bottom=\"false\" md-swipe-content=\"true\" md-selected=\"listingShareDialogCtrl.selectedIndex\"><md-tab><md-tab-label>Contacts</md-tab-label><md-tab-body><md-toolbar md-scroll-shrink=\"\" md-shrink-speed-factor=\"0.50\" class=\"search\"><div layout=\"row\" layout-align=\"start center\" flex=\"\" style=\"position:relative;\" class=\"md-toolbar-tools\"><md-input-container md-no-float=\"\" style=\"padding-bottom:0em;\" class=\"md-subhead\"><input type=\"text\" placeholder=\"Search\" name=\"search\" ng-model=\"listingShareDialogCtrl.search\"></md-input-container><div style=\"position:absolute;top:0em;right:0em;\"><md-button aria-label=\"search\" ng-click=\"listingShareDialogCtrl.clearSearch()\" ng-disabled=\"(listingShareForm.search.$viewValue) ? false : true\" class=\"md-icon-button md-primary\">search</md-button></div></div></md-toolbar><md-content style=\"overflow:scroll;height:18em;\" class=\"list\"><div><md-list><md-list-item ng-repeat=\"item in items\" class=\"md-2-line\"><md-checkbox item.id=\"\"></md-checkbox><div class=\"md-list-item-text\"><h3 ng-bind=\"::item.a\"></h3><p ng-bind=\"::item.b\"></p></div></md-list-item></md-list></div></md-content></md-tab-body></md-tab><md-tab><md-tab-label>New</md-tab-label><md-tab-body><div class=\"form\"><md-input-container><label>First Name</label> <input type=\"text\" name=\"firstName\" ng-model=\"listingShareDialogCtrl.firstName\" required=\"true\"><ng-messages for=\"listingShareForm.firstName.$error\" ng-if=\"listingShareForm.firstName.$touched\"><ng-message when=\"required\">Field is required</ng-message></ng-messages></md-input-container><md-input-container><label>Cell Number</label> <input type=\"text\" name=\"phone\" ng-model=\"listingShareDialogCtrl.phone\" mask=\"(999) 999-9999\" required=\"true\" mre-validator-phone=\"\"><ng-messages for=\"listingShareForm.phone.$error\" ng-if=\"listingShareForm.$submitted\"><div ng-messages-include=\"app/common/ng-messages.html\"></div></ng-messages></md-input-container><md-input-container><label>Email</label> <input type=\"email\" name=\"email\" ng-model=\"listingShareDialogCtrl.email\"><ng-messages for=\"listingShareForm.email.$error\" ng-if=\"listingShareForm.$submitted\"><div ng-messages-include=\"app/common/ng-messages.html\"></div></ng-messages></md-input-container></div></md-tab-body></md-tab></md-tabs></md-content></div></form><div class=\"md-actions\"><md-button ng-click=\"listingShareDialogCtrl.cancel()\" class=\"md-primary\">Cancel</md-button><md-button ng-click=\"listingShareDialogCtrl.share()\" ng-disabled=\"listingShareDialogCtrl.fetching\" class=\"md-primary md-raised\">Share</md-button></div></md-dialog>",
      clickOutsideToClose: true,
      bindToController: false,
      controller: function($scope, $mdDialog){
        $scope.items = [
          {a:'a', b:'b'},
          {a:'a', b:'b'},
          {a:'a', b:'b'}
        ];
      }
    });
  };












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

