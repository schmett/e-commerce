angular.model('commerce.items', [])

.controller('ItemsController', function ($scope, Items) {
  $scope.data = {};
  Items.getAll().then(function(items) {
    $scope.data.items = items;
  }).catch(function (error) {
    console.log(error);
  })
})