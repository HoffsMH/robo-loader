const _ = require("lodash");

const conveyorBeltSettings = require("./game-settings/conveyor_belt_settings");
const Cell = require("./cell");


function ConveyorBelt(settings) {
  this.state = {
    cellOffset: 0
  };
  this.settings = settings || conveyorBeltSettings();
  this.cells = [];
  this.initCells(this.settings.CellCount);
}

ConveyorBelt.prototype.render = function(canvas,laneIndex) {
  this.renderCells(canvas, laneIndex);
};

ConveyorBelt.prototype.renderCells = function(canvas,laneIndex) {
  _.each(this.cells, function(cell) {
    console.log(this);
    console.log(this.cells);
    cell.render(canvas, laneIndex);
  });
};

ConveyorBelt.prototype.initCells = function(cellCount) {
  _.times(cellCount, function() {
    this.addToBelt(new Cell());
  });
};

ConveyorBelt.prototype.addToBelt = function(cell) {
  cell.addToBelt(this.cells);
  this.cells.push(cell);
};

module.exports = ConveyorBelt;
