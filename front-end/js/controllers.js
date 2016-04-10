angular
  .module("lightsaberApp")
  .controller("MainController", MainController)
  .controller("EpisodeController", EpisodeController)

// EPISODE
EpisodeController.$inject = ['EpisodeResource']
function EpisodeController(EpisodeResource){

  var self = this;

  // Blank new episode for form
  this.episode = {};

  // Obtain our resource class
  var Episode = EpisodeResource;

  // Fetch all todos
  this.episodes = Episode.query();

  // Fetch the clicked todo
  this.selectEpisode = function(episode) {
    self.selectedEpisode = Episode.get({id: episode._id});
  };

  // Create/Update a Episode (Class Method)
  this.addEpisode = function() {
    if (self.episode._id) {
      Episode.update(self.episode, function(){
        self.episode = {};
      });
    } else {
      Episode.save(self.episode, function(episode) {
        self.episodes.push(episode);
        self.episode = {}
      });
    }
  };

  // Delete a Character
  this.deleteEpisode = function(episode){
    Episode.delete({id: episode._id});
    var index = self.episodes.indexOf(episode);
    self.episodes.splice(index, 1);
  }

  // Fill the form to edit a Character
  this.editEpisode = function(episode){
    self.episode = episode;
  }
}

// CHARACTERS
MainController.$inject = ['Character'];
function MainController(Character){
  var self = this;

  // Blank new character for form
  this.character = {};

  // this.toni = Character;

  // Obtain our resource class
  var Character = Character;

  // Fetch all todos
  this.characters = Character.query();

  // Fetch the clicked todo
  this.selectCharacter = function(character) {
    self.selectedCharacter = Character.get({id: character._id});
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