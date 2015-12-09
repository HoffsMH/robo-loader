const ConveyorBelt = require("./conveyor_belt");
const LaneWorker = require("./lane_worker");
function Lane() {
  this.conveyorBelt =  new ConveyorBelt();
  this.laneWorker =  new LaneWorker();
}

Lane.prototype.render = function () {
  this.conveyorBelt.render();
  this.laneWorker.render();
};

module.exports = Lane;
