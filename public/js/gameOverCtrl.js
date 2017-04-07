angular.module('gamingPrac').controller('gameOverCtrl', function($scope, $state) {

  setTimeout(function() {
    $state.go('home')},
    6000)
  })
