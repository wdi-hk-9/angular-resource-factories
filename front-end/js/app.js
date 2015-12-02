angular
  .module("lightsaberApp", ['ngResource','ui.router']).config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('char', {
    url: "/",
    templateUrl: "char.html",
  })
  .state('episode', {
    url: "/episode",
    templateUrl: "episode.html",
  })

$urlRouterProvider.otherwise('/');
}