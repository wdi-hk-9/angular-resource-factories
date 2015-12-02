angular
  .module('lightsaberApp')
  .factory('Episode', Episode);

Episode.$inject = ['$resource'];

function Episode($resource) {
  var EpisodeResource = $resource('http://localhost:3000/episodes/:id',
    {id: '@_id'},
    {'update': { method:'PUT' }
  });

  Object.defineProperty(EpisodeResource.prototype, 'TheForceName', {
    get: function(){
      if (this.name) {
        if (this.name.indexOf(" ") === -1) return this.name;
        return this.name.slice(0, this.name.indexOf(" "));
      }
    }
  });

  return EpisodeResource;
}