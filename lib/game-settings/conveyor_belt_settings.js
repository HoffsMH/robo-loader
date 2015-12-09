const getBoardSettings = require("./board_settings");

function conveyorBeltSettings() {
  var boardSettings = getBoardSettings();
  var x             = boardSettings.conveyorAreaStart;
  var y             = 0;
  var width         = boardSettings.conveyorAreaWidth;
  var height        = (boardSettings.height / boardSettings.laneCount) * 0.75;


  var cellCount     = boardSettings.cellCount;
  var vLaneStarts   = boardSettings.vLaneStarts;
  var laneHeight    = boardSettings.laneHeight;
  var hCellStart    = boardSettings.hCellStart;

  return {
    x:           x,
    y:           y,
    height:      height,
    width:       width,
    cellCount:   cellCount,
    vLaneStarts: vLaneStarts,
    laneHeight:  laneHeight,
    hCellStart:  hCellStart
  };
}

module.exports = conveyorBeltSettings;
