const boardSettings = require("./board_settings");

function loadingAreaSettings() {
  return {
    lanes: boardSettings().lanes || 4
  };
}

module.exports = loadingAreaSettings;
