const laneWorkerSettings = require("./game-settings/lane_worker_settings");

function LaneWorker(laneIndex, settings) {
  this.settings = settings || laneWorkerSettings();
  var randomStart = (this.settings.x + Math.floor(Math.random() * 200) + 1);

  this.state = {
    changed:       true,
    laneIndex: laneIndex,
    working: false,
    base: {
      type:        "basic",
      x:           randomStart,
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

LaneWorker.prototype.render = function(canvas, laneIndex) {
  this.renderBase(canvas, laneIndex);
  this.update();
};

LaneWorker.prototype.renderBase = function(canvas, laneIndex) {
  var context = canvas[0].getContext("2d");

  var currentLaneStart = this.settings.vLaneStarts[laneIndex];
  context.beginPath();
  context.rect(this.state.x, currentLaneStart, this.settings.width, this.settings.height);
  context.fillStyle = "white";
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.stroke();
};

LaneWorker.prototype.update = function() {

  // I have to somehow get information regarding where  the blobs are if there are any
  // if conveyor belt for this lane contains a single blob
  // this workers x is now the x of the blob whos cell is closest to
  if (this.state.x <= 500) {
    this.state.working = true;
  }
  if (this.state.working){
    this.state.x += 0.5;
  } else {
    this.state.x -= 0.5;
  }
};

module.exports = LaneWorker;
