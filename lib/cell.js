const cellSettings = require("./game-settings/cell_settings");
const ColorBlob = require("./color_blob");

function Cell(settings) {
  this.settings = settings || cellSettings();
  this.state = {
    cellOffset: 0
  };
  this.colorBlob = null;
};

Cell.prototype.render = function(canvas,laneIndex) {
  this.renderBase(canvas, laneIndex);
  if (this.colorBlob) {
    this.colorBlob.render(canvas, laneIndex);
  }
};

Cell.prototype.renderBase = function(canvas, laneIndex) {
  var context = canvas[0].getContext("2d");
  context.beginPath();
  context.rect(this.state.x, this.settings.vConveyorBeltStarts[laneIndex], this.settings.width, this.settings.height);
  context.fillStyle = "gray";
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.stroke();
};

Cell.prototype.addToBelt = function(cells) {
  var width = this.settings.width;
  var firstCellStart = this.settings.hCellStart;
  var cellCount = cells.length;

  this.state.x = firstCellStart - (cellCount * width);

  return this;
};

Cell.prototype.update = function() {
  this.state.x += 0.5;
  if (this.colorBlob) {
    this.colorBlob.attachToCell(this);
  }
};

module.exports = Cell;
