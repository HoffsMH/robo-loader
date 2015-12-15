const _ = require("lodash");
function LaneWorkerEngine(game) {
  this.game = game;
  //so this thing
  //is going to affect the state of the lane worker
  // if the lane worker is state setted to working then when we update we attach him to the conveyor belt
  // for that reason we only set a lane worker to working when his x is exactly even with a blob
  // we still need some way of identifying the blob he is currently working on
  // the first things that comes to mind is his x coord

  // we could also do a range

  // lane worker cell =
  //go through all the cells currently in  this lane workers lane
  // which one of them has an x that is
  // where should we attach this appendage?
  // player events?
  // updateengine update lane worker
  //
  // laneWorker engine update lane worker
}

LaneWorkerEngine.prototype.update = function(laneWorker) {
  var cell = this.getCurrentCell(laneWorker);
  if (cell  && cell.state.children.colorBlob) {
    // console.log("we hit a blob");
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
