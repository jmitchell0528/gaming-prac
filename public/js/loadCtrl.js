angular.module('gamingPrac').controller('loadCtrl', function($scope, $state) {
  setTimeout(function() {
    $state.go('home')
  }, 2000)
})
