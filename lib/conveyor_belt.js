const _ = require("lodash");

const conveyorBeltSettings = require("./game-settings/conveyor_belt_settings");
const Cell = require("./cell");


function ConveyorBelt(settings) {
  this.state = {
    cellOffset: 0
  };
  this.settings = settings || conveyorBeltSettings();

  this.cells = [];
  this.initCells(this.settings.cellCount);
}

ConveyorBelt.prototype.render = function(canvas,laneIndex) {
  this.renderCells(canvas, laneIndex);
  this.updateCells(this.cells);
};

ConveyorBelt.prototype.updateCells = function(cells) {
  _.each(cells, function(cell) {
    cell.update();
  });
  var firstCellPosition = cells[0].state.x;
  if (firstCellPosition > this.settings.beltEnd) {
    // console.log(cells[0].state.x+"compare"+this.settings.hCellStart);
    // console.log(cells[0].state.x);
    cells.shift();
    this.addToBelt(new Cell())
  }
};

ConveyorBelt.prototype.renderCells = function(canvas,laneIndex) {
  _.each(this.cells, function(cell) {
    cell.render(canvas, laneIndex);
  });
};

ConveyorBelt.prototype.initCells = function(cellCount) {
  _.times(cellCount, function() {
    var cell = new Cell();
    this.addToBelt(cell);
  }.bind(this));
};

ConveyorBelt.prototype.addToBelt = function(cell) {
  cell.addToBelt(this.cells);
  this.cells.push(cell);
};


module.exports = ConveyorBelt;
