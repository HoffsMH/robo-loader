const loadingAreaSettings = require("./game-settings/loading_area_settings");
const SelectedLane = require("./selected-lane");

function LoadingArea(settings) {
  this.settings = settings || loadingAreaSettings();
  this.state = {
    selectedColor: 0,
    changed:       true,
    base: {
      type:        "basic",
      x:           this.settings.x,
      y:           this.settings.y,
      width:       this.settings.width,
      height:      this.settings.height,
      fillColor:   this.settings.fillColor,
      lineWidth:   this.settings.lineWidth,
      strokeStyle: this.settings.lineWidth
    },
    children: { selectedLane: new SelectedLane()}
  };

}

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
  if (selectedColor  !== 0) {
    this.state.selectedColor -= 1;
  } else {
    this.state.selectedColor = this.settings.colors.length -1;
  }
  this.state.changed = true;
  return this.state;
};

LoadingArea.prototype.colorUp = function () {
  var selectedColor = this.state.selectedColor;
  if (selectedColor  < this.settings.colors.length  - 1  ) {
    this.state.selectedColor += 1;
  } else {
    this.state.selectedColor = 0;
  }
  this.state.changed = true;
  return this.state;
};

module.exports = LoadingArea;
