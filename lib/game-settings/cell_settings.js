const getBoardSettings = require("./board_settings");

function cellSettings() {
  var boardSettings = getBoardSettings();

  var width               = boardSettings.cellWidth;
  var height              = boardSettings.conveyorBeltHeight;

  var hCellStart          = boardSettings.hCellStart;
  var vConveyorBeltStarts = boardSettings.vConveyorBeltStarts;
  return {
    width:               width,
    height:              height,
    hCellStart:          hCellStart,
    vConveyorBeltStarts: vConveyorBeltStarts
  };
}

module.exports = cellSettings;
