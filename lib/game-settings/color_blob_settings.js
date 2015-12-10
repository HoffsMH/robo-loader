const getBoardSettings = require("./board_settings");

function colorBlobSettings() {
  var boardSettings = getBoardSettings();

  var width               = boardSettings.colorBlobWidth;
  var height              = boardSettings.colorBlobHeight;

  var hCellStart          = boardSettings.hCellStart;
  var vConveyorBeltStarts = boardSettings.vConveyorBeltStarts;
  var vColorBlobStarts    = boardSettings.vColorBlobStarts;

  return {
    width:               width,
    height:              height,
    hCellStart:          hCellStart,
    vConveyorBeltStarts: vConveyorBeltStarts,
    vColorBlobStarts:    vColorBlobStarts
  };
}

module.exports = colorBlobSettings;
