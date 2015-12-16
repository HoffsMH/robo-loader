const _ = require("lodash");
function LaneWorkerEngine(game) {
  this.game = game;
}

LaneWorkerEngine.prototype.update = function(laneWorker) {
  if (laneWorker.state.working) {
    laneWorker.state.base.x += 0.5;
    if (!laneWorker.state.cell.state.children.colorBlob) {
      laneWorker.state.working = false;
      laneWorker.state.cell = undefined;
      return true;
    }
    laneWorker.state.cell.state.children.colorBlob.state.base.width -= 0.35;
    if (laneWorker.state.cell.state.children.colorBlob.state.base.width  <= 0) {
      laneWorker.state.cell.state.children = {};
      laneWorker.state.cell = undefined;
      laneWorker.state.working = false;
    }
  } else {
    var cell = this.getCurrentCell(laneWorker);
    if (cell  && cell.state.children.colorBlob) {
      laneWorker.state.working = true;
      laneWorker.state.cell = cell;
      return true;
    } else {
      laneWorker.state.base.x -= 1;
      return false;
    }
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
