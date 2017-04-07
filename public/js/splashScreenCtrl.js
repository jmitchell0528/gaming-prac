angular.module('gamingPrac').controller('splashScreenCtrl', function($scope, $state) {

  setTimeout(function() {
    $state.go('scoreScreen')},
    10000)
  })
