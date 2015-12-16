const _ = require("lodash");
const Cell = require("./cell");

function CellEngine(game) {
  this.game = game;
}

CellEngine.prototype.update = function(cells) {
  var laneIndex    = cells[0].getState("laneIndex");
  var conveyorBelt = this.game.conveyorArea.lanes[laneIndex].conveyorBelt;
  _.forEach(cells, function(cell) {
    this.updateCell(cell);
  }.bind(this));

  if (this.outOfRoom(cells)) {
    this.addANewCellTo(conveyorBelt);
  }
};

CellEngine.prototype.outOfRoom = function(cells) {
  var firstCellPosition = cells[0].getBase('x');
  var beltEnd = this.game.settings.beltEnd;
  return firstCellPosition > beltEnd;
};

CellEngine.prototype.addANewCellTo = function(conveyorBelt) {
  var laneIndex = conveyorBelt.getState("laneIndex");
  var cell = new Cell(laneIndex);

  conveyorBelt.cells.shift();
  cell.addToBelt(conveyorBelt.cells.length);
  conveyorBelt.getChild().push(cell);
};

CellEngine.prototype.updateCell = function(cell) {
  cell.incBase("x", cell.settings.speed);
  if (cell.getChild("colorBlob")) {
    cell.getChild("colorBlob")
    .incBase("x", cell.settings.speed);
  }
};

module.exports = CellEngine;
