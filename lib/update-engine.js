const _ = require('lodash');
const LaneWorkerEngine = require("./lane-worker-engine");
const CellEngine = require("./cell-engine");

function UpdateEngine(game) {
  this.game = game;
  this.laneWorkerEngine = new LaneWorkerEngine(game);
  this.cellEngine = new CellEngine(game);
}

UpdateEngine.prototype.update = function(game) {
  this.updateConveyorArea(game.conveyorArea);
  this.updateLoadingArea(game.loadingArea);
};

UpdateEngine.prototype.updateConveyorArea = function(conveyorArea) {
  this.updateLanes(conveyorArea.state.children);
};

UpdateEngine.prototype.updateLanes = function(lanes) {
  _.forEach(lanes, function(lane) {
    this.updateLane(lane);
  }.bind(this));
};

UpdateEngine.prototype.updateLane = function(lane) {
  this.updateConveyorBelt(lane.state.children.conveyorBelt);
  this.updateLaneWorker(lane.state.children.laneWorker);
};

UpdateEngine.prototype.updateConveyorBelt = function(conveyorBelt) {
  var cells = conveyorBelt.state.children;
  this.cellEngine.update(cells);
};

UpdateEngine.prototype.updateLaneWorker = function(laneWorker) {
  this.laneWorkerEngine.update(laneWorker);
};

UpdateEngine.prototype.updateLoadingArea = function(loadingArea) {
  this.updateSelectedLane(loadingArea.selectedLane);
};

UpdateEngine.prototype.updateSelectedLane = function(selectedLane) {
  var laneIndex  = selectedLane.state.laneNumber;
  var colorIndex = selectedLane.state.colorIndex;
  var drCounters = selectedLane.state.drCounters;
  selectedLane.state.base.counterText = drCounters[colorIndex][laneIndex];
};

module.exports = UpdateEngine;
