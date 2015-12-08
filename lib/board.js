const boardSettings = require("./game-settings/board_settings");

const LoadingArea = require("./loading_area");

function Board(settings) {
  this.settings = settings || boardSettings();
  this.loadingArea = new LoadingArea();

}
module.exports = Board;