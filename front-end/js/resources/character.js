angular
  .module('lightsaberApp')
  // Create a factory
  // https://docs.angularjs.org/guide/providers
  .factory('Character', Character);

// Add a dependency to our factory
Character.$inject = ['$resource'];

// Factory implementation
function Character($resource) {
  return $resource('http://localhost:3000/characters/:id', {id: '@_id'}, {
    'update': { method:'PUT' }
  });
}
