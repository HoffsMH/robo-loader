const _         = require("lodash");
const ColorBlob = require("./color-blob");
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
  var game = this;

  var selectedLane = game.getCurrentLane();
  var currentDrs = selectedLane.currentDrs;

  console.log(currentDrs);
  // DrCategories
  //where does this  data belong
  //it could go anywhere
  //it make sense upon first evaluation that it should go in the  loading area
  //since the loading area is responsible for actually putting down the blobs
  // the problem with that is that we need 4 different little cubby holes
  //for our 4 different sets of drs for each lane
  //ie when I use up all my drs for a given color for one lane
  //i should have fresh drs in all the other lanes

  //therefore im going to store lane specific drs in the lane objects
  // even though they are children of the conveyorArea object

  //if current drs are going to be stored in the lane

  //then why not also store
  // currentDrs

  //so I have drCategories ad current Drs
  //lets expand the language a little bit here
  // when i press enter I want to
  //figure out what color is selected
  //figure out what lane I am on
  // use those 2 pieces of information  to figure out
  // how many blobs to put down and of what color


  //after I put down the appropriate amount of blobs
  // I want to turn the dr onto the next category

  // if that was my first use of that color in that lane
  //i set a intervval to reset the cd after a certain amount of time
};









module.exports = PlayerEvents;
