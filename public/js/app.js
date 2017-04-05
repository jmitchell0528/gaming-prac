angular.module('gamingPrac', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/")
    $stateProvider

    .state('load', {
      url: '/',
      templateUrl: "template/loadTmpl.html",
      controller: 'loadCtrl'
    })

    .state('home', {
      url: '/home',
      templateUrl: "template/splashScreenTmpl.html",
      controller: "splashScreen"
    })

    .state('credits', {
      url: '/credits',
      templateUrl: "template/creditsTmpl.html",
      controller: 'creditsCtrl'
    })

    .state('ctrlSettings', {
      url: '/ctrlSettings',
      templateUrl: "template/ctrlSettingsTmpl.html",
      controller: 'ctrlSettingsCtrl'
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

    .state('nameEntry', {
      url: '/nameEntry',
      templateUrl: "template/nameEntryTmpl.html",
      controller: 'nameEntryCtrl'
    })

    .state('scoreScreen', {
      url: '/scoreScreen',
      templateUrl: "template/scoreScreenTmpl.html",
      // controller: 'scoreCtrl'
    })

    .state('gameOver', {
      url: '/gameOver',
      templateUrl: "template/gameOverTmpl.html",
      controller: 'gameOverCtrl'
    })

  })
