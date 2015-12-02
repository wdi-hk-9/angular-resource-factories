angular
  .module("lightsaberApp", ['ui.router', 'ngResource'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('characters', {
      url: "/characters",
      templateUrl: "characters.html"
    })
    .state('episodes', {
      url: "/episodes",
      templateUrl: "episodes.html"
    });

  $urlRouterProvider.otherwise("/");


}