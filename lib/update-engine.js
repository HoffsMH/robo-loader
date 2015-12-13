const _ = require('lodash');
const Cell = require('./cell');

function UpdateEngine() {

}

UpdateEngine.prototype.update = function(game) {
  this.updateConveyorArea(game.state.children.conveyorArea);
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
  var firstCellPosition = cells[0].state.base.x;

  _.forEach(cells, function(cell) {
    cell.state.base.x += 0.5;
    if (cell.state.children.colorBlob) {
      cell.state.children.colorBlob.state.base.x += 0.5;
    }
  });
  if (firstCellPosition > conveyorBelt.settings.beltEnd) {
    var cell = new Cell(conveyorBelt.state.laneIndex);
    cells.shift();
    cell.addToBelt(cells.length);
    conveyorBelt.state.children.push(cell);
  }
};

UpdateEngine.prototype.updateLaneWorker = function(laneWorker) {
  laneWorker.state.base.x -= 1;
};


module.exports = UpdateEngine;
