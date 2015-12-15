const loadingAreaSettings = require("./game-settings/loading_area_settings");
const SelectedLane = require("./selected-lane");

function LoadingArea(settings) {
  this.settings = settings || loadingAreaSettings();
  this.state = {
    colorIndex: 0,
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
  this.selectedLane = this.state.children.selectedLane;
}

LoadingArea.prototype.getCurrentLaneIndex = function() {
  return this.selectedLane.state.laneIndex;
};

module.exports = LoadingArea;
