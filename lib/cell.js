const cellSettings = require("./game-settings/cell-settings");
const extend       = require("./util/extend");
const incGet       = require("./util/inc-get");

function Cell(laneIndex, settings) {
  this.settings = settings || cellSettings();
  this.state = {
    changed:       true,
    laneIndex: laneIndex,
    base: {
      type:        "basic",
      x:           this.settings.x,
      y:           this.settings.y,
      width:       this.settings.width,
      height:      this.settings.height,
      fillColor:   this.settings.fillColor,
      lineWidth:   this.settings.lineWidth,
      strokeStyle: this.settings.lineWidth
    },
    children: {}
  };
  this.colorBlob = this.state.children.colorBlob;
}

extend(Cell.prototype, incGet);

Cell.prototype.addToBelt = function(cellCount) {
  var width = this.settings.width;
  var firstCellStart = this.settings.hCellStart;
  this.state.base.y = this.settings.vConveyorBeltStarts[this.state.laneIndex];
  this.state.base.x = firstCellStart - (cellCount * width);
  return this;
};

module.exports = Cell;
