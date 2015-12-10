const loadingAreaSettings = require("./game-settings/loading_area_settings");

function LoadingArea(settings) {
  this.state = {
    selectedLane: 0,
    selectedColor: 0,
    changed: true
  };
  this.settings = settings || loadingAreaSettings();
}

LoadingArea.prototype.render = function (canvas) {
  //get a hold of the canvas
  //read some things from our state
  //draw our state to the canvas
  //return the gamestate even though it hasn't changed
  this.renderBase(canvas);
  this.renderSelected(canvas);
  return this.state;
};

LoadingArea.prototype.renderBase = function (canvas) {
  if (this.state.changed){
    var context = canvas[0].getContext("2d");
    context.clearRect(this.settings.x, this.settings.y, this.settings.width, this.settings.height);
    context.fillStyle = this.settings.colors[this.state.selectedColor].bg;
    context.fillRect(this.settings.x, this.settings.y, this.settings.width + 1, this.settings.height);
    return this.state;
  }
};

LoadingArea.prototype.renderSelected = function (canvas) {
  if (this.state.changed) {
    var context = canvas[0].getContext("2d");
    context.fillStyle = this.settings.colors[this.state.selectedColor].selected;
    context.fillRect(this.settings.x, this.settings.vLaneStarts[this.state.selectedLane], this.settings.width, this.settings.laneHeight);
    // this.state.changed = false;
    return this.state;
  }
};


LoadingArea.prototype.laneDown = function () {
  var selectedLane = this.state.selectedLane;
  if (selectedLane  !== 0) {this.state.selectedLane -= 1;}
  this.state.changed = true;
  return this.state;
};

LoadingArea.prototype.laneUp = function () {
  var selectedLane = this.state.selectedLane;
  if (selectedLane  < this.settings.laneCount -1 ) {this.state.selectedLane += 1;}
  this.state.changed = true;
  return this.state;
};

LoadingArea.prototype.colorDown = function () {
  var selectedColor = this.state.selectedColor;
  if (selectedColor  !== 0) {this.state.selectedColor -= 1;}
  this.state.changed = true;
  return this.state;
};

LoadingArea.prototype.colorUp = function () {
  var selectedColor = this.state.selectedColor;
  if (selectedColor  < this.settings.colors.length -1 ) {this.state.selectedColor += 1;}
  this.state.changed = true;
  return this.state;
};

module.exports = LoadingArea;
