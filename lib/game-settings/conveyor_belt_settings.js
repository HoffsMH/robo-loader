const getBoardSettings = require("./board_settings");

function conveyorBeltSettings() {
  var boardSettings = getBoardSettings();
  var width         = boardSettings.conveyorAreaWidth;
  var height        = (boardSettings.height / boardSettings.laneCount) * 0.75;

  var cellCount     = boardSettings.cellCount;
  var vLaneStarts   = boardSettings.vLaneStarts;
  var laneHeight    = boardSettings.laneHeight;

  return {
    height: height,
    width: width,
    cellCount: cellCount,
    vLaneStarts: vLaneStarts,
    laneHeight: laneHeight
  };
}

module.exports = conveyorBeltSettings;
