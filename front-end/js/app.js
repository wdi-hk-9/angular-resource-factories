angular
  .module("lightsaberApp", ['ngResource', 'ui.router'])
  .config(MainRouter);

  function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('episode', {
      url: "/episode",
      templateUrl: "episode.html"
    })
    .state('character', {
      url: "/character",
      templateUrl: "character.html"
    })
  }