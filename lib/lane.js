const laneSettings = require("./game-settings/lane_settings");

const ConveyorBelt = require("./conveyor_belt");
const LaneWorker = require("./lane_worker");

function Lane(settings) {
  this.state        = {};
  this.settings     = settings || laneSettings();

  this.conveyorBelt =  new ConveyorBelt();
  this.laneWorker   =  new LaneWorker();
}

Lane.prototype.render = function (canvas, laneIndex) {
  this.renderBase(canvas, laneIndex);
  this.conveyorBelt.render();
  this.laneWorker.render();
};

Lane.prototype.renderBase = function(canvas, laneIndex) {
  var context = canvas[0].getContext("2d");
  var currentLaneStart = this.settings.vLaneStarts[laneIndex];
  context.beginPath();
      context.rect(this.settings.x, currentLaneStart, this.settings.width, this.settings.height);
      context.fillStyle = this.settings.bgColor;
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
};

module.exports = Lane;
