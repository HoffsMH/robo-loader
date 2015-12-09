const _ = require("lodash");

const conveyorAreaSettings = require("./game-settings/conveyor_area_settings");
const Lane = require("./lane");

function ConveyorArea(settings) {
  this.state    = {};
  this.settings = settings || conveyorAreaSettings();
  
  this.lanes    = this.getLanes(this.settings.laneCount);
}

ConveyorArea.prototype.render = function (canvas) {
  //get a hold of the canvas
  //read some things from our state
  //draw our state to the canvas
  //return the gamestate even though it hasn't changed
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
  var context = canvas[0].getContext("2d");
  context.clearRect(this.settings.x, this.settings.y, this.settings.width, this.settings.height);
  context.fillStyle = this.settings.bgColor;
  context.fillRect(this.settings.x, this.settings.y, this.settings.width, this.settings.height);

  return this.state;
};

ConveyorArea.prototype.renderLanes = function (canvas) {
  var context = canvas[0].getContext("2d");
  _.forEach(this.lanes, function(lane, index) {
    lane.render(canvas, index);
    var currentLaneStart = this.settings.vLaneStarts[index];
    // console.log("LANE! "+ lane)
    context.beginPath();
        context.rect(this.settings.x, currentLaneStart, this.settings.width, this.settings.height);
        context.fillStyle = this.settings.bgColor;
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = 'black';
        context.stroke();
  }.bind(this));
  return this.state;
};


module.exports = ConveyorArea;
