angular.module('gamingPrac').controller('nameEntryCtrl', function($scope, $state, service) {
  $scope.logger = function(input) {
    console.log(input)
    // service.timer, service.score, service.level
  }
})
