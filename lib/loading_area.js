const loadingAreaSettings = require("./game-settings/loading_area_settings");
const getLaneStarts = require("./util/get_lane_starts");
const getLaneHeight = require("./util/get_lane_height");

function LoadingArea(settings) {
  this.settings = settings || loadingAreaSettings();
  this.state = {
    selected: 0
  };
  this.laneStarts = getLaneStarts(this.settings.laneCount, this.settings.height);
  this.laneHeight = getLaneHeight(this.settings.laneCount, this.settings.height);

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
  context.fillRect(this.settings.x, this.laneStarts[this.state.selected], this.settings.width, this.laneHeight);
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
