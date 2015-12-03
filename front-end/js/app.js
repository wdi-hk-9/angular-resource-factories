angular
  .module('lightsaberApp', ['ngResource', 'ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider  ){
  $stateProvider
  .state('character', {
    url: "/character",
    templateUrl: "character.html"
  })
  .state('episode',{
    url: '/episode',
    templateUrl: "episode.html"
  });

  $urlRouterProvider.otherwise("/");

}