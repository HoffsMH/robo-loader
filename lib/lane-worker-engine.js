const _ = require("lodash");
const $ = require("jquery");

function LaneWorkerEngine(game) {
  this.game = game;
}

LaneWorkerEngine.prototype.update = function(laneWorker) {
  if (laneWorker.getBase("x") <= this.game.settings.conveyorAreaStart) {
    this.game.state.inProgress = false;
    $(".header").html("LOSE! Press enter to restart.");
  }
  if (laneWorker.state.working) {
    laneWorker.state.base.x += this.game.settings.conveyorSpeed;
    if (!laneWorker.state.cell.state.children.colorBlob) {
      laneWorker.state.working = false;
      laneWorker.state.cell = undefined;
      return true;
    }
    laneWorker.state.cell.state.children.colorBlob.state.base.width -= this.game.settings.laneWorkerWorkSpeed;
    this.game.state.score += 1;
    if (this.game.state.score % 1000 === 0) {
      this.game.settings.laneWorkerWorkSpeed = this.game.settings.laneWorkerWorkSpeed * 1.06;
      this.game.settings.laneWorkerSpeed = this.game.settings.laneWorkerSpeed * 1.06;
    }
    $(".score").html("score: "+ this.game.state.score);
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
      laneWorker.state.base.x -= this.game.settings.laneWorkerSpeed;
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
