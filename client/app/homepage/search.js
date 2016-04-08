angular.model('commerce.search', [])

.controller('SearchController', function ($scope, Items, Location, Date) {
  $scope.data = [];
  if(Items) {
    $scope.data.push(Items);
  }
  if(Location) {
    $scope.data.push(Location);
  }
  if(Date) {
    $scope.data.push(Date);
  }
  Search.getAll($scope.data).then(function(items) {
    $scope.data.items = items;
  }).catch(function (error) {
    console.log(error);
  })
})