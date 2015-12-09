const getBoardSettings = require("./board_settings");

const getLaneStarts = require("../util/get_lane_starts");
const getLaneHeight = require("../util/get_lane_height");

function laneSettings() {
  var boardSettings = getBoardSettings();
  var x             = boardSettings.conveyorAreaStart;
  var y             = 0;
  var width         = boardSettings.conveyorAreaWidth;
  var height        = boardSettings.height / boardSettings.laneCount;

  var vLaneStarts   = getLaneStarts(boardSettings.laneCount, boardSettings.height);
  var laneHeight    = getLaneHeight(boardSettings.laneCount, boardSettings.height);

  return {
    x: x,
    y: y,
    height: height,
    width: width,
    vLaneStarts: vLaneStarts,
    laneHeight: laneHeight
  };
}

module.exports = laneSettings;
