const _ = require("lodash");

const cellSettings = require("./game-settings/cell_settings");


function Cell(settings) {
  this.settings = settings || cellSettings();
  this.state = {
    cellOffset: 0
  };
};

Cell.prototype.render = function(canvas,laneIndex) {

};


Cell.prototype.addToBelt = function(cells) {
  var width = this.settings.width;
  var firstCellStart = this.settings.hCellStart;
  var cellCount = cells.length;

  this.state.x = firstCellStart - (cellCount * width);

  return this;
};

module.exports = Cell;
