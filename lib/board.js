const boardSettings = require("./game-settings/board_settings");

const LoadingArea = require("./loading_area");

function Board(settings) {
  this.settings = settings || boardSettings();
  this.canvas = this.settings.canvas;
  this.loadingArea = new LoadingArea();

}
Board.prototype.start = function () {
  console.log("The Game has started");
  //now some of this will be later pulled out into initialize because
  //we want init and start to be 2 separate actions

  //init needs to happen once the page loads
  //start needs to start on a user action

  //main loop that will go and go until the game reaches an end
  requestAnimationFrame(function gameLoop() {
    requestAnimationFrame(gameLoop);
  });
};

module.exports = Board;
