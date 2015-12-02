angular
  .module("lightsaberApp")
  .controller("CharacterController", CharacterController);

CharacterController.$inject = ['Character']
function CharacterController(Character){
  var self = this;

  // Blank new character for form
  this.character = {}

  this.ada = Character;

  // Obtain our resource class
  var Character = Character;

  // Fetch all characters
  this.characters = Character.query();

  // Fetch the clicked character
  this.selectCharacter = function(character) {
    self.selectedCharacter = Character.get({ id: character._id });
  };

  // Save as a Constructor
  // this.addCharacter = function() {
  //   var character = new Character(self.character);
  //   character.$save(function(){
  //     self.characters.push(character);
  //     self.character = {};
  //   });
  // };

  // Create/Update a Character (Class Method)
  this.addCharacter = function() {
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
  this.deleteCharacter = function(character){
    Character.delete({id: character._id});
    var index = self.characters.indexOf(character);
    self.characters.splice(index, 1);
  }

  // Fill the form to edit a Character
  this.editCharacter = function(character){
    self.character = character;
  }
}