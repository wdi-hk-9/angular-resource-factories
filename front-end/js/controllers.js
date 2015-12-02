angular
  // Add ngResource as a dependency
  .module("lightsaberApp", ['ngResource'])
  .controller("MainController", MainController);

// Inject our factory so our controller can use it
MainController.$inject = ['$resource', 'Character']

function MainController($resource, Character){
  var self = this;

  // Blank new character for form
  self.character = {};

  self.test = Character;

  // Obtain our resource class
  var Character = $resource('http://localhost:3000/characters/:id', {id: '@_id'}, {
    'update': { method:'PUT' }
  });

  // Fetch all todos
  self.characters = Character.query();

  // Fetch the clicked todo
  self.selectCharacter = function(character) {
    self.selectedCharacter = Character.get({id: character._id});
  };

  // Save as a Constructor
  // self.addCharacter = function() {
  //   var character = new Character(self.character);
  //   character.$save(function(){
  //     self.characters.push(character);
  //     self.character = {};
  //   });
  // };

  // Create/Update a Character (Class Method)
  self.addCharacter = function() {
    if (self.character._id) {
      Character.update(self.character, function(){
        self.character = {};
      });
    } else {
      Character.save(self.character, function(character) {
        self.characters.push(character);
        self.character = {}
      });
    }
  };

  // Delete a Character
  self.deleteCharacter = function(character){
    Character.delete({id: character._id});
    var index = self.characters.indexOf(character);
    self.characters.splice(index, 1);
  }

  // Fill the form to edit a Character
  self.editCharacter = function(character){
    self.character = character;
  }
}
