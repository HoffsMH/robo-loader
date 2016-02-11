const _         = require("lodash");
const ColorBlob = require("./color-blob");

function BlobEngine(game) {
  this.game = game;
}

BlobEngine.prototype.putBlobs = function () {
  var cells = this.game.getBlobCells();

  //put the blobs down and increment the dr
  _.each(cells, this.putBlob.bind(this));
  this.incrementDr(this.game);

  // clear all cells on the same level with the same color
  // getBlobCells().length() number from OTHER lanes
  _.each(this.game.lanes, function(lane) {
    if (lane.state.laneIndex === this.game.getCurrentLaneIndex()) {
      return true;
    }
    var cells = lane.cells;
    var startingIndex = cells.length - this.game.getNextBlobAmount() -1;
    if (startingIndex < 0 ) {return false;}
    var first_cells = cells.slice(startingIndex, cells.length);
    _.each(first_cells, function(cell) {
      if (cell.state.children.colorBlob &&
        cell.state.children.colorBlob.state.colorIndex === this.game.getCurrentColorIndex() &&
        cell) {
          cell.state.children = {};
        }
      }.bind(this));
  }.bind(this));
};

BlobEngine.prototype.putBlob = function (cell) {
  var colorBlob = new ColorBlob(this.game.getCurrentLaneIndex());

  colorBlob.attachToCell(cell);
  colorBlob.color(this.game.getCurrentColorIndex());
};

BlobEngine.prototype.incrementDr = function () {
  var currentLaneDrs = this.game.getCurrentLaneDrs();
  var colorIndex = this.game.getCurrentColorIndex();
  var laneIndex  = this.game.getCurrentLaneIndex();

  if (this.thereIsFreshDr(currentLaneDrs, colorIndex)){
    this.applyFreshDr(currentLaneDrs, colorIndex, laneIndex);
  }
  currentLaneDrs[colorIndex] += 1;
  this.game.selectedLane.decrementBlobAmount();
};

BlobEngine.prototype.applyFreshDr = function (currentLaneDrs, colorIndex, laneIndex) {
  this.setCounter(colorIndex, laneIndex);
  this.startCounter(currentLaneDrs, colorIndex, laneIndex);
};

BlobEngine.prototype.setCounter = function(colorIndex, laneIndex){
  var startingCount =  this.game.settings.startingDrCount;
  this.game.drCounters[colorIndex][laneIndex] = startingCount;
};

BlobEngine.prototype.startCounter = function(currentDrs, colorIndex, laneIndex){
  var counter = setInterval(function(){
    this.game.drCounters[colorIndex][laneIndex] -= 1;
    if (this.countIsUp(colorIndex, laneIndex)) {
      this.clearDr(currentDrs, colorIndex, laneIndex, counter);
    }
  }.bind(this), 1000);
  this.game.counters.push(counter);
};

BlobEngine.prototype.clearDr = function(currentDrs, colorIndex, laneIndex, counter){
  clearInterval(counter);
  currentDrs[colorIndex] = 0;
  this.game.selectedLane.state.blobAmountIndex[colorIndex][laneIndex] = 0;
};

BlobEngine.prototype.countIsUp = function(colorIndex, laneIndex){
  return (this.game.drCounters[colorIndex][laneIndex] <= 0);
};

BlobEngine.prototype.thereIsFreshDr = function (currentDrs, colorIndex) {
  return !currentDrs[colorIndex];
};

module.exports = BlobEngine;
