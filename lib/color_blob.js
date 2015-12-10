const colorBlobSettings = require("./game-settings/color_blob_settings");

function ColorBlob(settings) {
  this.settings = settings || colorBlobSettings();
  this.state = {
    x: 0,
    color: 0
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
  this.state.x = cell.state.x + 25;
};

module.exports = ColorBlob;
