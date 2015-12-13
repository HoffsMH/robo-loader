const getBoardSettings = require("./board_settings");

function selectedLaneSettings() {
  var boardSettings = getBoardSettings();
  var x             = boardSettings.loadingAreaStart;
  var y             = 0;
  var width         = boardSettings.loadingAreaWidth;
  var height        = boardSettings.laneHeight;

  var vLaneStarts   = boardSettings.vLaneStarts;
  var laneHeight    = boardSettings.laneHeight;

  var colors        = boardSettings.colors;
  var fillColor     = colors[0].selected;
  var drCategories  = boardSettings.drCategories;
  return {
    laneCount: boardSettings.lanes || 4,
    x:            x,
    y:            y,
    width:        width,
    height:       height,
    colors:       colors,
    vLaneStarts:  vLaneStarts,
    laneHeight:   laneHeight,
    fillColor:    fillColor,
    drCategories: drCategories
  };
}

module.exports = selectedLaneSettings;
