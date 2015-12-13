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

module.exports = LoadingArea;
