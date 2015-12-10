const getBoardSettings = require("./board_settings");

function loadingAreaSettings() {
  var boardSettings = getBoardSettings();
  var x             = boardSettings.loadingAreaStart;
  var y             = 0;
  var width         = boardSettings.loadingAreaWidth;
  var height        = boardSettings.height;

  var vLaneStarts   = boardSettings.vLaneStarts;
  var laneHeight    = boardSettings.laneHeight;

  var colors        = boardSettings.colors;
  return {
    laneCount: boardSettings.lanes || 4,
    x:           x,
    y:           y,
    width:       width,
    height:      height,
    colors:      colors,
    vLaneStarts: vLaneStarts,
    laneHeight:  laneHeight
  };
}

module.exports = loadingAreaSettings;
