const getBoardSettings = require("./board_settings");

function laneWorkerSettings() {
  var boardSettings = getBoardSettings();

  var width               = boardSettings.laneWorkerWidth;
  var height              = boardSettings.laneWorkerHeight;
  var x                   = boardSettings.width - width;
  var y                   = 0;
  var colors              = boardSettings.colors;
  var vLaneStarts         = boardSettings.vLaneWorkerStarts;

  return {
    width:               width,
    height:              height,
    x:                   x,
    y:                   y,
    colors:              colors,
    fillColor:           "white",
    vLaneStarts:         vLaneStarts
  };
}

module.exports = laneWorkerSettings;
