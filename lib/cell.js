const cellSettings = require("./game-settings/cell_settings");
const ColorBlob = require("./color_blob");

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
    children: []
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

Cell.prototype.addToBelt = function(cellCount) {
  var width = this.settings.width;
  var firstCellStart = this.settings.hCellStart;
  this.state.base.y = this.settings.vConveyorBeltStarts[this.state.laneIndex];
  this.state.base.x = firstCellStart - (cellCount * width);
  return this;
};

Cell.prototype.update = function() {
  this.state.x += 0.5;
  if (this.colorBlob) {
    this.colorBlob.attachToCell(this);
  }
};

module.exports = Cell;
