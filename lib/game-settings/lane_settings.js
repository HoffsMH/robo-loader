const getBoardSettings = require("./board_settings");

function laneSettings() {
  var boardSettings = getBoardSettings();
  var x             = boardSettings.conveyorAreaStart;
  var y             = 0;
  var width         = boardSettings.conveyorAreaWidth;
  var height        = boardSettings.height / boardSettings.laneCount;

  var vLaneStarts   = boardSettings.vLaneStarts;
  var laneHeight    = boardSettings.laneHeight;
  var bgColor       = "#D4A46A";

  return {
    x: x,
    y: y,
    height: height,
    width: width,
    bgColor: bgColor,
    vLaneStarts: vLaneStarts,
    laneHeight: laneHeight
  };
}

module.exports = laneSettings;
