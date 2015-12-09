const getBoardSettings = require("./board_settings");

const getLaneStarts = require("../util/get_lane_starts");
const getLaneHeight = require("../util/get_lane_height");

function conveyorBeltSettings() {
  var boardSettings = getBoardSettings();
  var width         = boardSettings.conveyorAreaWidth;
  var height        = (boardSettings.height / boardSettings.laneCount) * 0.75;

  var cellCount     = 9;
  var vLaneStarts   = getLaneStarts(boardSettings.laneCount, boardSettings.height);
  var laneHeight    = getLaneHeight(boardSettings.laneCount, boardSettings.height);

  return {
    height: height,
    width: width,
    cellCount: cellCount,
    vLaneStarts: vLaneStarts,
    laneHeight: laneHeight
  };
}

module.exports = conveyorBeltSettings;
