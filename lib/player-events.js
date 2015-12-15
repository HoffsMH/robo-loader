const _         = require("lodash");
const BlobEngine = require("./blob-engine");

function PlayerEvents(game) {
  this.game = game;
  this.blobEngine = new BlobEngine(game);
}

PlayerEvents.prototype.changeLane = function (direction) {
  return function() {
    var selectedLane = this.game.selectedLane;
    var vLaneStarts = selectedLane.settings.vLaneStarts;

    selectedLane.state.laneIndex += direction;
    if (selectedLane.state.laneIndex > this.game.settings.laneCount -1) {
      selectedLane.state.laneIndex = 0;
    } else if (selectedLane.state.laneIndex < 0) {
      selectedLane.state.laneIndex = this.game.settings.laneCount -1;
    }
    selectedLane.state.base.y = vLaneStarts[selectedLane.state.laneIndex];
    selectedLane.state.changed = true;
    return this.game;
  };
};

PlayerEvents.prototype.changeColor = function (direction) {
  return function() {
    var selectedLane = this.game.selectedLane;
    var loadingArea = this.game.loadingArea;

    loadingArea.state.colorIndex += direction;
    selectedLane.state.colorIndex += direction;
    if (loadingArea.state.colorIndex  > loadingArea.settings.colors.length -1 ) {
      //we went too high reset to 0
      loadingArea.state.colorIndex  = 0;
      selectedLane.state.colorIndex = 0;
    } else if (loadingArea.state.colorIndex  < 0) {
      // we went too low go back to top
      loadingArea.state.colorIndex  = loadingArea.settings.colors.length -1;
      selectedLane.state.colorIndex = loadingArea.settings.colors.length -1;
    }
    loadingArea.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.colorIndex].bg;
    selectedLane.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.colorIndex].selected;

    loadingArea.state.changed = true;
    selectedLane.state.changed = true;

    return this.game;
  };
};

PlayerEvents.prototype.laneUp = PlayerEvents.prototype.changeLane(1);
PlayerEvents.prototype.laneDown = PlayerEvents.prototype.changeLane(-1);
PlayerEvents.prototype.colorUp = PlayerEvents.prototype.changeColor(1);
PlayerEvents.prototype.colorDown = PlayerEvents.prototype.changeColor(-1);




PlayerEvents.prototype.putBlobs = function (game) {
  this.blobEngine.putBlobs()
  // _.each(game.getBlobCells(),  function(cell) {
  //   var game = this;
  //   var colorBlob = new ColorBlob(game.getCurrentLaneIndex());
  //   colorBlob.attachToCell(cell);
  //   colorBlob.color(game.getCurrentColorIndex());
  // }.bind(game));
  // this.incrementDr(game);
};

PlayerEvents.prototype.incrementDr = function (game) {
  var currentDrs = game.getCurrentDrs();
  var colorIndex = game.getCurrentColorIndex();
  // var laneIndex  = game.getCurrentLaneIndex();

  this.checkForFreshDr(game);

  currentDrs[colorIndex] += 1;
  game.selectedLane.decrementBlobAmount();
};

PlayerEvents.prototype.checkForFreshDr = function (game) {
    var currentDrs = game.getCurrentDrs();
  var colorIndex = game.getCurrentColorIndex();
  var laneIndex  = game.getCurrentLaneIndex();

  if (!currentDrs[colorIndex]) {
    game.drCounters[colorIndex][laneIndex] = 20;
    var interval = setInterval(function(){
      game.drCounters[colorIndex][laneIndex] -= 1;
      if (!game.drCounters[colorIndex][laneIndex]) {
        clearInterval(interval);
        currentDrs[colorIndex] = 0;
        game.selectedLane.state.blobAmountIndex[colorIndex][laneIndex] = 0;
      }
    }, 1000);
  }
};


module.exports = PlayerEvents;
