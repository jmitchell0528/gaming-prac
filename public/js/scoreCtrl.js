angular.module('gamingPrac').controller('scoreCtrl', function($scope, $state, scoreService) {
  $scope.getHighScores = scoreService.getHighScores().then(function(response) {
    $scope.highScores = response.data;
    console.log($scope.highScores)

    setTimeout(function() {
      $state.go('home')
    }, 10000)
  })
});
