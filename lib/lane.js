const _            = require("lodash");
const laneSettings = require("./game-settings/lane-settings");

const ConveyorBelt = require("./conveyor-belt");
const LaneWorker   = require("./lane-worker");

function Lane(laneIndex, settings) {
  this.settings = settings || laneSettings();
  this.state = {
    selectedColor:     0,
    changed:           true,
    laneIndex:         laneIndex,
    currentDrs:        this.getStartingDrs(),
    base: {
      type:        "basic",
      x:           this.settings.x,
      y:           this.settings.y + (this.settings.vLaneStarts[laneIndex]),
      width:       this.settings.width,
      height:      this.settings.height,
      fillColor:   this.settings.fillColor,
      lineWidth:   this.settings.lineWidth,
      strokeStyle: this.settings.lineWidth
    },
    children: {
      conveyorBelt: new ConveyorBelt(laneIndex),
      laneWorker: new LaneWorker(laneIndex)
    }
  };
  this.currentDrs   = this.state.currentDrs;
  this.conveyorBelt = this.state.children.conveyorBelt;
  this.cells        = this.conveyorBelt.cells;
}

Lane.prototype.getStartingDrs = function() {
  return _.map(this.settings.colors, function() {
    return 0;
  }.bind(this));
};

module.exports = Lane;
