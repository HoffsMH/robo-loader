const _         = require("lodash");
const ColorBlob = require("./color-blob");

function BlobEngine(game) {
  this.game = game;
}


BlobEngine.prototype.putBlobs = function () {

  var cells = this.game.getBlobCells();

  _.each(cells, this.putBlob.bind(this));
  this.incrementDr(this.game);
};

BlobEngine.prototype.putBlob = function (cell) {
  var colorBlob = new ColorBlob(this.game.getCurrentLaneIndex());

  colorBlob.attachToCell(cell);
  colorBlob.color(this.game.getCurrentColorIndex());
};

BlobEngine.prototype.incrementDr = function () {
  var currentDrs = this.game.getCurrentDrs();
  var colorIndex = this.game.getCurrentColorIndex();
  var laneIndex  = this.game.getCurrentLaneIndex();

  if (!this.checkForFreshDr(currentDrs, colorIndex)){
    this.applyFreshDr(currentDrs, colorIndex, laneIndex);
  }

  currentDrs[colorIndex] += 1;
  this.game.selectedLane.decrementBlobAmount();
};


BlobEngine.prototype.applyFreshDr = function (currentDrs, colorIndex, laneIndex) {
  this.setCounter(colorIndex, laneIndex);
  this.startCounter(currentDrs, colorIndex, laneIndex);
};

BlobEngine.prototype.setCounter = function(colorIndex, laneIndex){
  var startingCount =  this.game.settings.startingDrCount;
  this.game.drCounters[colorIndex][laneIndex] = startingCount;
};

BlobEngine.prototype.startCounter = function(currentDrs, colorIndex, laneIndex){
  var counter = setInterval(function(){
    this.game.drCounters[colorIndex][laneIndex] -= 1;
    if (this.countIsUp(colorIndex, laneIndex)) {
      //clear dr
      this.clearDr(currentDrs, colorIndex, laneIndex, counter);
    }
  }.bind(this), 1000);
};

BlobEngine.prototype.clearDr = function(currentDrs, colorIndex, laneIndex, counter){
  clearInterval(counter);
  currentDrs[colorIndex] = 0;
  this.game.selectedLane.state.blobAmountIndex[colorIndex][laneIndex] = 0;
};


BlobEngine.prototype.countIsUp = function(colorIndex, laneIndex){
  return !this.game.drCounters[colorIndex][laneIndex];
};

BlobEngine.prototype.checkForFreshDr = function (currentDrs, colorIndex) {
  return currentDrs[colorIndex];
};

module.exports = BlobEngine;