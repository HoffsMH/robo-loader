const getBoardSettings = require("./board_settings");

function cellSettings() {
  var boardSettings = getBoardSettings();

  var width         = boardSettings.cellWidth;
  var height        = boardSettings.conveyorBeltHeight;

  var hCellStart    = boardSettings.hCellStart;
  return {
    width: width,
    height: height
  };
}

module.exports = cellSettings;
