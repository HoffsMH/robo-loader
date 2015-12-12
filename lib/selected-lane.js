const selectedLaneSettings = require("./game-settings/selected-lane-settings");

function SelectedLane(settings) {
  this.settings = settings || selectedLaneSettings();
  this.state = {
    laneNumber:  0,
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
    children: {}
  };

}

module.exports = SelectedLane;
