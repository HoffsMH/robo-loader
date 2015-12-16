const _ = require("lodash");
function LaneWorkerEngine(game) {
  this.game = game;
}

LaneWorkerEngine.prototype.update = function(laneWorker) {
  var cell = this.getCurrentCell(laneWorker);
  if (cell  && cell.colorBlob) {
    laneWorker.state.base.x += 1;
    return true;
  } else {
    laneWorker.state.base.x -= 1;
    return false;
  }
};

LaneWorkerEngine.prototype.getCurrentCell = function(laneWorker) {
  if (!this.checkForCell(laneWorker)) { return undefined; }
  var laneIndex = laneWorker.state.laneIndex;

  var cells = this.game.conveyorArea.lanes[laneIndex].cells;

  var cell = _.filter(cells, function(cell){
    return (cell.state.base.x < laneWorker.state.base.x &&
      laneWorker.state.base.x < (cell.state.base.x + cell.state.base.width));
  })[0];

  return cell;
};

LaneWorkerEngine.prototype.checkForCell = function(laneWorker) {
  var cells = this.getCells(laneWorker);
  var firstCell = cells[0];
  var lastCell = cells[cells.length -1];
  if (laneWorker.state.base.x  > (firstCell.state.base.x + firstCell.state.base.width)) {
    return false;
  } else if (laneWorker.state.base.x  < lastCell.state.base.x){
    return false;
  }
  return true;
};

LaneWorkerEngine.prototype.getCells = function(laneWorker) {
  var currentLaneIndex = laneWorker.state.laneIndex;
  var lane = this.game.conveyorArea.lanes[currentLaneIndex];
  return lane.cells;
};


module.exports = LaneWorkerEngine;
