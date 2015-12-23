const laneWorkerSettings = require("./game-settings/lane-worker-settings");
const extend       = require("./util/extend");
const incGet       = require("./util/inc-get");


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
      y:           this.settings.y + (this.settings.vLaneStarts[laneIndex]),
      width:       this.settings.width,
      height:      this.settings.height,
      fillColor:   this.settings.fillColor,
      lineWidth:   this.settings.lineWidth,
      strokeStyle: this.settings.lineWidth
    },
    children: {}
  };
}

extend(LaneWorker.prototype, incGet);

module.exports = LaneWorker;
