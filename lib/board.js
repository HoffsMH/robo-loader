
const boardSettings = require("./game-settings/board_settings");
const LoadingArea = require("./loading_area");
const ConveyorArea = require("./conveyor_area");
const PlayerEvents = require("./player-events");


function Board(settings) {
  this.settings = settings || boardSettings();
  this.state = {
    changed:       true,
    inProgress:    true,
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
    children: { conveyorArea: new ConveyorArea(),
                loadingArea: new LoadingArea()
             }
  };
  this.html = this.settings.canvasHtml;
  this.playerEvents = new PlayerEvents();

  //children
  this.conveyorArea = this.state.children.conveyorArea;
  this.loadingArea = this.state.children.loadingArea;

}

Board.prototype.getCurrentLane = function() {
  var currentLaneIndex = this.getCurrentLaneIndex();
  return this.conveyorArea.lanes[currentLaneIndex];
};

Board.prototype.getCurrentLaneIndex = function() {
  return this.loadingArea.getCurrentLaneIndex();
};

module.exports = Board;
