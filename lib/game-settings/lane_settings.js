const getBoardSettings = require("./board_settings");

function laneSettings() {
  var boardSettings = getBoardSettings();
  var x             = boardSettings.conveyorAreaStart;
  var y             = 0;
  var width         = boardSettings.conveyorAreaWidth;
  var height        = boardSettings.height / boardSettings.laneCount;

  var vLaneStarts   = boardSettings.vLaneStarts;
  var laneHeight    = boardSettings.laneHeight;
  var fillColor     = "#D4A46A";
  var colors        = boardSettings.colors;
  // var fillColor       = "black";

  return {
    x:            x,
    y:            y,
    height:       height,
    width:        width,
    fillColor:    fillColor,
    vLaneStarts:  vLaneStarts,
    laneHeight:   laneHeight,
    colors:       colors
  };
}

module.exports = laneSettings;
