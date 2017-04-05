angular.module('gamingPrac').service('scoreService', function($http, $q) {

  this.getHighScores = function() {
    return $http.get('http://localhost:3000/api/gamelogs')
    }

  })
