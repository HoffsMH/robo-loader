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
  if (this.state.changed){
    this.renderBase(canvas);
    this.state.changed = false;
  }
  this.renderLanes(canvas);
  return this.state;
};

ConveyorArea.prototype.getLanes = function (laneCount) {
  var lanes = [];
  _.times((laneCount) ,function(laneIndex) {
    var lane = new Lane();
    lane.state.index = laneIndex;
    lanes.push(lane);
  });
  return lanes;
};

ConveyorArea.prototype.renderBase = function (canvas) {
  var context = canvas[0].getContext("2d");
  context.clearRect(this.settings.x, this.settings.y, this.settings.width, this.settings.height);
  context.fillStyle = this.settings.bgColor;
  context.fillRect(this.settings.x, this.settings.y, this.settings.width, this.settings.height);
  return this.state;
};

ConveyorArea.prototype.renderLanes = function (canvas) {
    _.forEach(this.lanes, function(lane, laneIndex) {
      lane.render(canvas, laneIndex);
    }.bind(this));
    return this.state;
};


module.exports = ConveyorArea;
