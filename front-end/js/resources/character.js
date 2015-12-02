angular
  .module('lightsaberApp')
  // Create a factory
  // https://docs.angularjs.org/guide/providers
  .factory('Character', Character);

// Add a dependency to our factory
Character.$inject = ['$resource'];

// Factory implementation
function Character($resource) {

  var CharacterResource = $resource(
    'http://localhost:3000/characters/:id',
    {id: '@_id'},
    {'update': { method:'PUT' }}
  );

  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  Object.defineProperty(CharacterResource.prototype, 'firstName', {
    get: function(){
      if (this.name) {
        if (this.name.indexOf(" ") === -1) return this.name;
        return this.name.slice(0, this.name.indexOf(" "));
      }
    }
  })

  return CharacterResource;
}
