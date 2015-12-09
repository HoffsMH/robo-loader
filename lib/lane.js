const laneSettings = require("./game-settings/lane_settings");

const ConveyorBelt = require("./conveyor_belt");
const LaneWorker = require("./lane_worker");

function Lane(settings) {
  this.state        = {};
  this.settings     = settings || laneSettings();

  this.conveyorBelt =  new ConveyorBelt();
  this.laneWorker   =  new LaneWorker();
}

Lane.prototype.render = function (canvas, index) {
  this.renderBase(canvas, index);
  this.conveyorBelt.render();
  this.laneWorker.render();
};

Lane.prototype.renderBase = function(canvas, index) {
  var context = canvas[0].getContext("2d");


};

module.exports = Lane;
