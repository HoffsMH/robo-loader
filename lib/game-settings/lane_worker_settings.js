const getBoardSettings = require("./board_settings");

function laneWorkerSettings() {
  var boardSettings = getBoardSettings();

  var width               = boardSettings.laneWorkerWidth;
  var height              = boardSettings.laneWorkerHeight;
  var x                   = boardSettings.width - width;
  var colors              = boardSettings.colors;
  var vLaneStarts         = boardSettings.vLaneStarts;

  return {
    width:               width,
    height:              height,
    x:                   x,
    colors:              colors,
    vLaneStarts:         vLaneStarts
  };
}

module.exports = laneWorkerSettings;
