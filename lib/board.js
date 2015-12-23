const _             = require("lodash");
const boardSettings = require("./game-settings/board-settings");
const LoadingArea   = require("./loading-area");
const ConveyorArea  = require("./conveyor-area");
const PlayerEvents  = require("./player-events");
const extend        = require("./util/extend");
const incGet        = require("./util/inc-get");

function Board(settings) {
  this.settings = settings || boardSettings();
  this.state = {
    changed:       true,
    inProgress:    false,
    score:         0,
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
  this.lanes        = this.conveyorArea.lanes;
  this.loadingArea  = this.state.children.loadingArea;
  this.selectedLane = this.loadingArea.selectedLane;
  this.drCounters   = this.selectedLane.state.drCounters;

}

extend(Board.prototype, incGet);

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

Board.prototype.reset = function() {
  this.state["children"].conveyorArea = new ConveyorArea();
  this.conveyorArea = this.state.children.conveyorArea;

  this.state.score = 0;
};



module.exports = Board;
