const _ = require("lodash");

const conveyorBeltSettings = require("./game-settings/conveyor_belt_settings");
const Cell = require("./cell");


function ConveyorBelt(laneIndex, settings) {
  this.settings = settings || conveyorBeltSettings();
  this.state = {
    selectedColor: 0,
    changed:       true,
    laneIndex: laneIndex,
    base: {
      type:        "basic",
    },
    children: this.getCells(this.settings.cellCount, laneIndex)
  };
  this.cells = this.state.children;

}

ConveyorBelt.prototype.getCells = function(cellCount, laneIndex) {
  var cells =  [];
  _.times(cellCount, function() {
    var cell = new Cell(laneIndex);
    cell.addToBelt(cells.length);
    cells.push(cell);
  }.bind(this));
  return cells;
};

module.exports = ConveyorBelt;
