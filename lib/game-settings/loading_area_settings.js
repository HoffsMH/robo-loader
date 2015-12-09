const getBoardSettings = require("./board_settings");

const getLaneStarts = require("../util/get_lane_starts");
const getLaneHeight = require("../util/get_lane_height");

function loadingAreaSettings() {
  var boardSettings = getBoardSettings();
  var width         = boardSettings.loadingAreaWidth;
  var height        = boardSettings.height;

  var vLaneStarts = getLaneStarts(boardSettings.laneCount, boardSettings.height);
  var laneHeight = getLaneHeight(boardSettings.laneCount, boardSettings.height);

  var bgColor       = "#794A8D";
  var selectedColor = "#9974AA";
  var x             = boardSettings.loadingAreaStart;
  return {
    laneCount: boardSettings.lanes || 4,
    x: x,
    y: 0,
    width: width,
    height: height,
    bgColor: bgColor,
    selectedColor: selectedColor,
    vLaneStarts: vLaneStarts,
    laneHeight: laneHeight
  };
}

module.exports = loadingAreaSettings;
