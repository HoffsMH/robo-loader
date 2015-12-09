const _ = require("lodash");

const conveyorBeltSettings = require("./game-settings/conveyor_belt_settings");
const Lane = require("./lane");

function ConveyorBelt() {
  this.state = {
    cellOffset: 0
  };

};

ConveyorBelt.prototype.render = function(canvas,laneIndex) {
  this.renderCells(canvas, laneIndex);
};

ConveyorBelt.prototype.renderCells = function(canvas,laneIndex) {
  _.each(this.cells, function() {

  });
};

module.exports = ConveyorBelt;
