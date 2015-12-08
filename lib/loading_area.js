const loadingAreaSettings = require("./game-settings/loading_area_settings");

function LoadingArea(settings) {
  this.settings = settings || loadingAreaSettings();

}

module.exports = LoadingArea;
