const getBoardSettings = require("./board_settings");

const getLaneStarts = require("../util/get_lane_starts");

function loadingAreaSettings() {
  var boardSettings = getBoardSettings();
  var x             = boardSettings.loadingAreaStart;
  var y             = 0;
  var width         = boardSettings.loadingAreaWidth;
  var height        = boardSettings.height;

  var vLaneStarts   = getLaneStarts(boardSettings.laneCount, boardSettings.height);
  var laneHeight    = boardSettings.laneHeight;

  var bgColor       = "#794A8D";
  var selectedColor = "#9974AA";
  return {
    laneCount: boardSettings.lanes || 4,
    x: x,
    y: y,
    width: width,
    height: height,
    bgColor: bgColor,
    selectedColor: selectedColor,
    vLaneStarts: vLaneStarts,
    laneHeight: laneHeight
  };
}

module.exports = loadingAreaSettings;
