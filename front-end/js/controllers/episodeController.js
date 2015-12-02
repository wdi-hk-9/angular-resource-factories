angular
  .module('lightsaberApp')
  .controller('EpisodeController', EpisodeController);

EpisodeController.$inject = ['Episode'];
function EpisodeController(Episode) {
  var self = this;

  this.episode = {};

  var Episode = Episode;

  this.episodes = Episode.query();

  this.selectEpisode = function(episode) {
    self.selectedEpisode = Episode.get({ id: episode._id });
  };

  this.addEpisode = function() {
    if (self.episode._id) {
      Episode.update(self.episode, function() {
        self.episode = {};
      });
    }
    else {
      Episode.save(self.episode, function(episode) {
        self.episodes.push(episode);
        self.episode = {}
      });
    }
  };

  this.deleteEpisode = function(episode) {
    Episode.delete({ id: episode._id });
    var index = self.episodes.indexOf(episode);
    self.episodes.splice(index, 1);
  }

  this.editEpisode = function(episode) {
    self.episode = episode;
  }
}