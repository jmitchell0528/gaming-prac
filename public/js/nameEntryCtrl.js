angular.module('gamingPrac').controller('nameEntryCtrl', function($scope, $state, levelOne) {
  $scope.logger = function(username) {
    console.log(username)
    // service.timer, service.score, service.level

    levelOne.postGamelog(username).then(function(response) {
      console.log('MONEEEEEEEY', response);

      $state.go('scoreScreen')
    })
  }
})
