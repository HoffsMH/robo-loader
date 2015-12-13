
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

}

module.exports = Board;
