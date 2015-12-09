const boardSettings = require("./board_settings");

function loadingAreaSettings() {
  var width = boardSettings().width / 5;
  var height = boardSettings().height;
  var bgColor = "#794A8D";
  var selectedColor = "#9974AA";
  return {
    laneCount: boardSettings().lanes || 4,
    x: 0,
    y: 0,
    width: width,
    height: height,
    bgColor: bgColor,
    selectedColor: selectedColor
  };
}

module.exports = loadingAreaSettings;
