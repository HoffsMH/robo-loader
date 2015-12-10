const getBoardSettings = require("./board_settings");

function colorBlobSettings() {
  var boardSettings = getBoardSettings();

  var width               = boardSettings.colorBlobWidth;
  var height              = boardSettings.colorBlobHeight;
  var colors              = boardSettings.colors;

  var hCellStart          = boardSettings.hCellStart;
  var vConveyorBeltStarts = boardSettings.vConveyorBeltStarts;
  var vColorBlobStarts    = boardSettings.vColorBlobStarts;

  return {
    width:               width,
    height:              height,
    colors:              colors,
    hCellStart:          hCellStart,
    vConveyorBeltStarts: vConveyorBeltStarts,
    vColorBlobStarts:    vColorBlobStarts
  };
}

module.exports = colorBlobSettings;
