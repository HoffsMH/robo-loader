const $ = require("jquery");
const boardSettings = require("./game-settings/board_settings");

const LoadingArea = require("./loading_area");
const ConveyorArea = require("./conveyor_area");

const PlayerEvents = require("./player-events");

// temp
const ColorBlob = require("./color_blob");

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
    children: { loadingArea: new LoadingArea(),
               ConveyorArea: new ConveyorArea()
             }
  };
  this.html = this.settings.canvasHtml;
  this.playerEvents = new PlayerEvents();

}
Board.prototype.start = function () {
  //now some of this will be later pulled out into initialize because
  //we want init and start to be 2 separate actions
  this.canvas = $(this.canvasHtml).appendTo("body");


  //init needs to happen once the page loads
  //start needs to start on a user action

  //draw out the basic areas based on their settings

  console.log("The Game has started");
  //main loop that will go and go until the game reaches an end
  requestAnimationFrame(function gameLoop() {

    this.render();
    requestAnimationFrame(gameLoop.bind(this));
  }.bind(this));
};

Board.prototype.updateState = function() {
  this.state.loadingArea = this.loadingArea.state;
  this.state.conveyorArea = this.loadingArea.state;
};

Board.prototype.render = function () {
  this.conveyorArea.render(this.canvas);
  this.loadingArea.render(this.canvas);
};


module.exports = Board;
