const ColorBlob = require('./color-blob');
function PlayerEvents() {


}

PlayerEvents.prototype.laneUp = function () {
  var game = this;

  if (!game) {return game;}

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

PlayerEvents.prototype.laneDown = function () {
  var game = this;

  if (!game) {return game;}

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

PlayerEvents.prototype.colorUp = function () {
  var game = this;

  if (!game) {return game;}

  var selectedLane = game.state
  .children.loadingArea.state
  .children.selectedLane;

  var loadingArea = game.state
  .children.loadingArea;

  if (loadingArea.state.selectedColor  < loadingArea.settings.colors.length -1  ) {
    loadingArea.state.selectedColor += 1;
  } else {
    loadingArea.state.selectedColor  = 0;
  }
  loadingArea.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.selectedColor].bg;
  selectedLane.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.selectedColor].selected;

  loadingArea.state.changed = true;
  selectedLane.state.changed = true;

  return game;
};


PlayerEvents.prototype.colorDown = function () {
  var game = this;

  if (!game) {return game;}

  var selectedLane = game.state
  .children.loadingArea.state
  .children.selectedLane;

  var loadingArea = game.state
  .children.loadingArea;

  if (loadingArea.state.selectedColor  > 0) {
    loadingArea.state.selectedColor -= 1;
  } else {
    loadingArea.state.selectedColor  = loadingArea.settings.colors.length -1;
  }
  loadingArea.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.selectedColor].bg;
  selectedLane.state.base.fillColor = loadingArea.settings.colors[loadingArea.state.selectedColor].selected;

  loadingArea.state.changed = true;
  selectedLane.state.changed = true;

  return game;
};

PlayerEvents.prototype.putBlob = function () {
  var game               = this;
  var selectedLane       = game.state.children.loadingArea.state.children.selectedLane.state.laneNumber;
  var colors             = game.state.children.loadingArea.settings.colors;
  var selectedColorIndex = game.state.children.loadingArea.state.selectedColor;
  var selectedColor      = colors[selectedColorIndex].bg;

  var cells = game.state.children
              .conveyorArea.state.children[selectedLane]
              .state.children.conveyorBelt.state.children;

  var colorBlob1 = new ColorBlob(selectedLane);
  var colorBlob2 = new ColorBlob(selectedLane);
  var colorBlob3 = new ColorBlob(selectedLane);

  colorBlob1.state.base.fillColor = selectedColor;
  colorBlob2.state.base.fillColor = selectedColor;
  colorBlob3.state.base.fillColor = selectedColor;


  colorBlob1.attachToCell(cells[cells.length -1]);
  colorBlob2.attachToCell(cells[cells.length -2]);
  colorBlob3.attachToCell(cells[cells.length -3]);
};










module.exports = PlayerEvents;
