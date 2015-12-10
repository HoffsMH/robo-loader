const laneWorkerSettings = require("./game-settings/lane_worker_settings");

function LaneWorker(settings) {
  this.settings = settings || laneWorkerSettings();
  this.state = {
    x: this.settings.x
  };
}

LaneWorker.prototype.render = function(canvas, laneIndex) {
  this.renderBase(canvas, laneIndex);
};

LaneWorker.prototype.renderBase = function(canvas, laneIndex) {
  var context = canvas[0].getContext("2d");

  var currentLaneStart = this.settings.vLaneStarts[laneIndex];
  context.beginPath();
  context.rect(this.settings.x, currentLaneStart, this.settings.width, this.settings.height);
  context.fillStyle = "white";
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.stroke();
};


module.exports = LaneWorker;
