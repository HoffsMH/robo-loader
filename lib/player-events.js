const _         = require("lodash");
const ColorBlob = require("./color-blob");
function PlayerEvents() {


}

PlayerEvents.prototype.laneUp = function (game) {
  var selectedLane = game.state
  .children.loadingArea.state
  .children.selectedLane;

  var vLaneStarts = selectedLane.settings.vLaneStarts;

  if (selectedLane.state.laneNumber  < game.settings.laneCount -1 ) {
    selectedLane.state.laneNumber += 1;
    selectedLane.state.base.y = vLaneStarts[selectedLane.state.laneNumber];
    selectedLane.state.changed = true;
  }

  return game;
};

PlayerEvents.prototype.laneDown = function (game) {
  var selectedLane = game.state
  .children.loadingArea.state
  .children.selectedLane;

  var vLaneStarts = selectedLane.settings.vLaneStarts;
  if (selectedLane.state.laneNumber  > 0 ) {
    selectedLane.state.laneNumber -= 1;
    selectedLane.state.base.y = vLaneStarts[selectedLane.state.laneNumber];
    selectedLane.state.changed = true;
  }

  return game;
};

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
  this.checkForFreshDr(game);

  currentDrs[colorIndex] += 1;
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
      }
    }, 1000);
  }
};


module.exports = PlayerEvents;
