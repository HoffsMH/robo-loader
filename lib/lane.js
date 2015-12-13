const laneSettings = require("./game-settings/lane_settings");

const ConveyorBelt = require("./conveyor_belt");
const LaneWorker = require("./lane_worker");

function Lane(laneIndex, settings) {
  this.settings = settings || laneSettings();
  this.state = {
    selectedColor: 0,
    changed:       true,
    laneIndex: laneIndex,
    base: {
      type:        "basic",
      x:           this.settings.x,
      y:           this.settings.y + (this.settings.vLaneStarts[laneIndex]),
      width:       this.settings.width,
      height:      this.settings.height,
      fillColor:   this.settings.fillColor,
      lineWidth:   this.settings.lineWidth,
      strokeStyle: this.settings.lineWidth
    },
    children: {
      conveyorBelt: new ConveyorBelt(laneIndex)
      // laneWorker: new LaneWorker(laneIndex)
    }
  };
}

Lane.prototype.render = function (canvas, laneIndex) {
  this.renderBase(canvas, laneIndex);
  this.conveyorBelt.render(canvas, laneIndex);
  this.laneWorker.render(canvas, laneIndex);
};

Lane.prototype.renderBase = function(canvas, laneIndex) {
  var context = canvas[0].getContext("2d");
  var currentLaneStart = this.settings.vLaneStarts[laneIndex];
  context.beginPath();
  context.rect(this.settings.x, currentLaneStart, this.settings.width, this.settings.height);
  context.fillStyle = this.settings.bgColor;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.stroke();
};


  // first_blobed_cell= nil
  // this.conveyorBelt.cells.each do |cell|
  //   if cell.colorBlob
  //     first_blobed_cell = cell;
  //     break
  //   end
  // end

module.exports = Lane;
