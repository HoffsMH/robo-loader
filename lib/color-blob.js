const colorBlobSettings = require("./game-settings/color_blob_settings");

function ColorBlob(laneIndex, settings) {
  this.settings = settings || colorBlobSettings();
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
}

ColorBlob.prototype.render = function(canvas, laneIndex) {
  this.renderBase(canvas, laneIndex);

};

ColorBlob.prototype.renderBase = function(canvas, laneIndex) {
  var context = canvas[0].getContext("2d");
  context.beginPath();
  context.rect(this.state.x, this.settings.vColorBlobStarts[laneIndex], this.settings.width, this.settings.height);
  context.fillStyle = this.settings.colors[this.state.color].bg;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.stroke();
};

ColorBlob.prototype.attachToCell = function (cell) {
  this.state.base.y = this.settings.vColorBlobStarts[this.state.laneIndex];
  this.state.base.x = cell.state.base.x + 25;
  cell.state.children.colorBlob = this;
};

module.exports = ColorBlob;
