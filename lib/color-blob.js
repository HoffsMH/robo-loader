const colorBlobSettings = require("./game-settings/color-blob-settings");

function ColorBlob(laneIndex, settings) {
  this.settings = settings || colorBlobSettings();
  this.state = {
    changed:       true,
    laneIndex: laneIndex,
    colorIndex: 0,
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
  this.colorIndex = this.state.colorIndex;
}

ColorBlob.prototype.getBase = function(x) {
  return this.state.base[x];
};

ColorBlob.prototype.incBase = function(x, value) {
  return this.state.base[x] += value;
};

ColorBlob.prototype.attachToCell = function (cell) {
  this.state.base.y = this.settings.vColorBlobStarts[this.state.laneIndex];
  this.state.base.x = cell.state.base.x + 25;
  cell.state.children.colorBlob = this;
  return this;
};

ColorBlob.prototype.color = function(colorIndex) {
  this.state.colorIndex = colorIndex;
  this.state.base.fillColor = this.settings.colors[colorIndex].bg;
  return this;
};

module.exports = ColorBlob;
