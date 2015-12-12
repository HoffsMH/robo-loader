
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
  var selectedLane = this.loadingArea.state.selectedLane;
  var cells = this.conveyorArea.lanes[selectedLane].conveyorBelt.cells;

  var colorBlob1 = new ColorBlob();
  var colorBlob2 = new ColorBlob();
  var colorBlob3 = new ColorBlob();

  colorBlob1.state.color = this.loadingArea.state.selectedColor;
  colorBlob2.state.color = this.loadingArea.state.selectedColor;
  colorBlob3.state.color = this.loadingArea.state.selectedColor;


  cells[cells.length -1].colorBlob = colorBlob1
  cells[cells.length -2].colorBlob = colorBlob2
  cells[cells.length -3].colorBlob = colorBlob3
};










module.exports = PlayerEvents;
