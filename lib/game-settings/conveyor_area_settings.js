const getBoardSettings = require("./board_settings");

function conveyorAreaSettings() {
  var boardSettings = getBoardSettings();
  var width         = boardSettings.conveyorAreaWidth;
  var height        = boardSettings.height;
  var bgColor       = "#D4A46A";
  var x             = boardSettings.conveyorAreaStart;
  return {
    laneCount: boardSettings.lanes || 4,
    x: x,
    y: 0,
    width: width,
    height: height,
    bgColor: bgColor,
  };
}

module.exports = conveyorAreaSettings;
