const getBoardSettings = require("./board-settings");

function conveyorAreaSettings() {
  var boardSettings = getBoardSettings();
  var x             = boardSettings.conveyorAreaStart;
  var y             = 0;
  var width         = boardSettings.conveyorAreaWidth;
  var height        = boardSettings.height;

  var vLaneStarts   = boardSettings.vLaneStarts;
  var laneHeight    = boardSettings.laneHeight;

  var bgColor       = "#D4A46A";

  return {
    laneCount: boardSettings.lanes || 4,
    x: x,
    y: y,
    width: width,
    height: height,
    vLaneStarts: vLaneStarts,
    laneHeight: laneHeight,
    bgColor: bgColor
  };
}

module.exports = conveyorAreaSettings;
