angular
  .module("lightsaberApp", ['ngResource', 'ui.router'])
  .config(TheForceRouter);

function TheForceRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('character', {
      url: '/',
      templateUrl: 'character.html'
    })
  $stateProvider
    .state('episode', {
      url: '/episode',
      templateUrl: 'episode.html'
    })

  $urlRouterProvider.otherwise('/');
}
