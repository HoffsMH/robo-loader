const _ = require("lodash");

const cellSettings = require("./game-settings/cell_settings");


function Cell() {
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

module.exports = Cell;
