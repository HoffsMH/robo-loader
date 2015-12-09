const loadingAreaSettings = require("./game-settings/loading_area_settings");

function LoadingArea(settings) {
  this.settings = settings || loadingAreaSettings();
  this.state = {
    selected: 0
  };
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
  var context = canvas[0].getContext("2d");
  context.clearRect(this.settings.x, this.settings.y, this.settings.width, this.settings.height);
  context.fillStyle = this.settings.bgColor;
  context.fillRect(this.settings.x, this.settings.y, this.settings.width, this.settings.height);
  return this.state;
};

LoadingArea.prototype.renderSelected = function (canvas) {
  var context = canvas[0].getContext("2d");
  context.fillStyle = this.settings.selectedColor;
  context.fillRect(this.settings.x, this.settings.vLaneStarts[this.state.selected], this.settings.width, this.settings.laneHeight);
  return this.state;
};


LoadingArea.prototype.laneDown = function () {
  var selected = this.state.selected;
  if (selected  !== 0) {this.state.selected -= 1;}
  return this.state;
};

LoadingArea.prototype.laneUp = function () {
  var selected = this.state.selected;
  if (selected  < this.settings.laneCount -1 ) {this.state.selected += 1;}
  return this.state;
};

module.exports = LoadingArea;
