angular
  .module('lightsaberApp')
  .factory('EpisodeResource', EpisodeResource);

EpisodeResource.$inject = ['$resource'];

function EpisodeResource($resource) {
  return $resource('http://localhost:3000/episodes/:id',
    {id: '@_id'},
    {'update': { method:'PUT' }}
  );
}