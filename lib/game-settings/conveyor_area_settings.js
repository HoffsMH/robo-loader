const getBoardSettings = require("./board_settings");

const getLaneStarts = require("../util/get_lane_starts");
const getLaneHeight = require("../util/get_lane_height");

function conveyorAreaSettings() {
  var boardSettings = getBoardSettings();
  var x             = boardSettings.conveyorAreaStart;
  var y             = 0;
  var width         = boardSettings.conveyorAreaWidth;
  var height        = boardSettings.height;

  var vLaneStarts   = getLaneStarts(boardSettings.laneCount, boardSettings.height);
  var laneHeight    = getLaneHeight(boardSettings.laneCount, boardSettings.height);

  var bgColor       = "#D4A46A";
  return {
    laneCount: boardSettings.lanes || 4,
    x: x,
    y: y,
    width: width,
    height: height,
    vLaneStarts: vLaneStarts,
    laneHeight: laneHeight,
    bgColor: bgColor,
  };
}

module.exports = conveyorAreaSettings;
