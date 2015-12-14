const _             = require("lodash");
const boardSettings = require("./game-settings/board_settings");
const LoadingArea   = require("./loading_area");
const ConveyorArea  = require("./conveyor_area");
const PlayerEvents  = require("./player-events");


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
  this.playerEvents = new PlayerEvents(this);

  //children
  this.conveyorArea = this.state.children.conveyorArea;
  this.loadingArea  = this.state.children.loadingArea;
  this.selectedLane = this.loadingArea.selectedLane;
  this.drCounters   = this.selectedLane.state.drCounters;

}

Board.prototype.getCurrentLane = function() {
  var currentLaneIndex = this.getCurrentLaneIndex();
  return this.conveyorArea.lanes[currentLaneIndex];
};

Board.prototype.getCurrentLaneIndex = function() {
  return this.loadingArea.getCurrentLaneIndex();
};

Board.prototype.getCurrentDrs = function() {
  return this.getCurrentLane().currentDrs;
};

Board.prototype.getCurrentColorIndex = function() {
  return this.loadingArea.state.colorIndex;
};

Board.prototype.getNextBlobAmount = function() {
  var currentDrs = this.getCurrentDrs();
  var colorIndex = this.getCurrentColorIndex();

  return this.settings.drCategories[currentDrs[colorIndex]];
};

Board.prototype.getBlobCells = function() {
  var blobCells = [];
  var laneCells = this.getCurrentLane().cells;
  var lastLaneCellIndex = laneCells.length - 1;
  _.times(this.getNextBlobAmount(), function(index) {
    blobCells.push(laneCells[lastLaneCellIndex - index]);
  }.bind(this));
  return blobCells;
};

module.exports = Board;
