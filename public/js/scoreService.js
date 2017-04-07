angular.module('gamingPrac').service('scoreService', function($http, $q) {

  this.getHighScores = function() {
    return $http.get('/api/gamelogs')
    }

  })
