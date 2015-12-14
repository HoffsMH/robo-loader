const _                    = require("lodash");
const selectedLaneSettings = require("./game-settings/selected-lane-settings");

function SelectedLane(settings) {
  this.settings = settings || selectedLaneSettings();
  this.state = {
    laneNumber:     0,
    colorIndex:  0,
    drCounters: this.getStartingDrCounters(),
    changed:        true,
    base: {
      type:         "basic",
      x:            this.settings.x,
      y:            this.settings.y,
      width:        this.settings.width,
      height:       this.settings.height,
      fillColor:    this.settings.fillColor,
      lineWidth:    this.settings.lineWidth,
      strokeStyle:  this.settings.lineWidth
    },
    children: {}
  };
}

SelectedLane.prototype.getStartingDrCounters = function() {
  return _.map(this.settings.colors, function() {
    var output = [];
     _.times(this.settings.laneCount, function(){
      output.push(0);
    }.bind(this));
    return output;
  }.bind(this));

};


module.exports = SelectedLane;
