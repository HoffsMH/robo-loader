const getBoardSettings = require("./board_settings");

function loadingAreaSettings() {
  var boardSettings = getBoardSettings();
  var width         = boardSettings.loadingAreaWidth;
  var height        = boardSettings.height;
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
    selectedColor: selectedColor
  };
}

module.exports = loadingAreaSettings;
