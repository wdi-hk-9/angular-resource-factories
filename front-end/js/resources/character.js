angular
  .module('lightsaberApp')
  .factory('Character', Character);

Character.$inject = ['$resource'];
function Character($resource) {
  // $resources
  var CharacterResource = $resource('http://localhost:3000/characters/:id',
    {id: '@_id'},
    {'update': { method:'PUT' } }
  );

  // {  'get': {method:'GET'},
  //    'save': {method: 'POST'},
  //    'query': {method: 'GET', isArray:true},
  //    'remove': {method:'DELETE'},
  //    'delete': {method:'DELETE'},
  //    'firstNme': {get: f(x) } };

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