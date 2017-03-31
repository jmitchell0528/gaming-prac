angular.module('gamingPrac', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/")
    $stateProvider

    .state('load', {
      url: '/load',
      templateUrl: "template/loadTmpl.html",
      controller: 'loadCtrl'
    })

    .state('home', {
      url: '/',
      templateUrl: "template/splashScreenTmpl.html",
      controller: "splashScreen"
    })

    .state('charSelect', {
      url: '/charSelect',
      templateUrl: "template/charSelectTmpl.html",
      controller: "charSelectCtrl"
    })

    .state('levelOne', {
      url: '/levelOne',
      templateUrl: "template/levelOneTmpl.html",
      controller: 'levelOne'
    })

  })
