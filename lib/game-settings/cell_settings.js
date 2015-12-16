const getBoardSettings = require("./board_settings");

function cellSettings() {
  var boardSettings = getBoardSettings();

  var width               = boardSettings.cellWidth;
  var height              = boardSettings.conveyorBeltHeight;
  var speed               = boardSettings.conveyorSpeed;

  var hCellStart          = boardSettings.hCellStart;
  var vConveyorBeltStarts = boardSettings.vConveyorBeltStarts;
  var fillColor           = "grey";
  return {
    width:               width,
    height:              height,
    speed:               speed,
    hCellStart:          hCellStart,
    vConveyorBeltStarts: vConveyorBeltStarts,
    fillColor:           fillColor
  };
}

module.exports = cellSettings;
