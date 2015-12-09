const _ = require("lodash");

const conveyorAreaSettings = require("./game-settings/conveyor_area_settings");
const Lane = require("./lane");

function ConveyorArea(settings) {
  this.state    = {
    changed: true
  };
  this.settings = settings || conveyorAreaSettings();

  this.lanes    = this.getLanes(this.settings.laneCount);
}

ConveyorArea.prototype.render = function (canvas) {
  this.renderBase(canvas);
  this.renderLanes(canvas);
  return this.state;
};

ConveyorArea.prototype.getLanes = function (laneCount) {
  var lanes = [];
  _.times((laneCount) ,function() {
    lanes.push(new Lane());
  });
  return lanes;
};

ConveyorArea.prototype.renderBase = function (canvas) {
  if (this.state.changed){
    var context = canvas[0].getContext("2d");
    context.clearRect(this.settings.x, this.settings.y, this.settings.width, this.settings.height);
    context.fillStyle = this.settings.bgColor;
    context.fillRect(this.settings.x, this.settings.y, this.settings.width, this.settings.height);
    return this.state;
  }
};

ConveyorArea.prototype.renderLanes = function (canvas) {
  if (this.state.changed) {
    _.forEach(this.lanes, function(lane, laneIndex) {
      lane.render(canvas, laneIndex);
    }.bind(this));
    this.state.changed = false;
    return this.state;
  }
};


module.exports = ConveyorArea;
