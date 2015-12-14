const _         = require("lodash");
const ColorBlob = require("./color-blob");
function PlayerEvents() {


}

PlayerEvents.prototype.changeLane = function (direction) {
  return function(game) {
    var selectedLane = game.selectedLane;
    var vLaneStarts = selectedLane.settings.vLaneStarts;

    selectedLane.state.laneIndex += direction;
    if (selectedLane.state.laneIndex > game.settings.laneCount -1) {
      selectedLane.state.laneIndex = 0;
    } else if (selectedLane.state.laneIndex < 0) {
      selectedLane.state.laneIndex = game.settings.laneCount -1;
    }
    selectedLane.state.base.y = vLaneStarts[selectedLane.state.laneIndex];
    selectedLane.state.changed = true;
    return game;
  };
};

PlayerEvents.prototype.laneUp = PlayerEvents.prototype.changeLane(1);
PlayerEvents.prototype.laneDown = PlayerEvents.prototype.changeLane(-1);

PlayerEvents.prototype.colorUp = function (game) {

  var selectedLane = game.state
  .children.loadingArea.state
  .children.selectedLane;

  var loadingArea = game.state
  .children.loadingArea;

  if (loadingArea.state.colorIndex  < loadingArea.settings.colors.length -1  ) {
    loadingArea.state.colorIndex += 1;
    loadingArea.selectedLane.state.colorIndex += 1;
  } else {
    loadingArea.state.colorIndex  = 0;
    loadingArea.selectedLane.state.colorIndex = 0;
  }
  loadingArea.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.colorIndex].bg;
  selectedLane.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.colorIndex].selected;

  loadingArea.state.changed = true;
  selectedLane.state.changed = true;

  return game;
};


PlayerEvents.prototype.colorDown = function (game) {
  var selectedLane = game.state
  .children.loadingArea.state
  .children.selectedLane;

  var loadingArea = game.state
  .children.loadingArea;

  if (loadingArea.state.colorIndex  > 0) {
    loadingArea.state.colorIndex -= 1;
    loadingArea.selectedLane.state.colorIndex -= 1;
  } else {
    loadingArea.state.colorIndex  = loadingArea.settings.colors.length -1;
    loadingArea.selectedLane.state.colorIndex = loadingArea.settings.colors.length -1;
  }
  loadingArea.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.colorIndex].bg;
  selectedLane.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.colorIndex].selected;

  loadingArea.state.changed = true;
  selectedLane.state.changed = true;

  return game;
};

PlayerEvents.prototype.putBlobs = function (game) {
  _.each(game.getBlobCells(),  function(cell) {
    var game = this;
    var colorBlob = new ColorBlob(game.getCurrentLaneIndex());
    colorBlob.attachToCell(cell);
    colorBlob.color(game.getCurrentColorIndex());
  }.bind(game));
  this.incrementDr(game);
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
