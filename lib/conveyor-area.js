const _ = require("lodash");

const conveyorAreaSettings = require("./game-settings/conveyor-area-settings");
const Lane = require("./lane");

function ConveyorArea(settings) {
  this.settings = settings || conveyorAreaSettings();
  var lanes = this.getLanes(this.settings.laneCount);
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
    children: lanes
  };
  this.lanes = lanes;
}

ConveyorArea.prototype.getLanes = function (laneCount) {
  var lanes = [];
  _.times((laneCount) ,function(laneIndex) {
    var lane = new Lane(laneIndex);
      lanes.push(lane);
  });
  return lanes;
};

module.exports = ConveyorArea;
