const CanvasEngine = require("./canvas-engine");
const UpdateEngine = require("./update-engine");

function Setup() {
}

Setup.prototype.start = function(game) {
  var canvasEngine = new CanvasEngine(game.html);
  var updateEngine = new UpdateEngine(game);

  requestAnimationFrame(function gameLoop() {

    canvasEngine.render(game);
    updateEngine.update(game);

    if (game.state.inProgress) {
      requestAnimationFrame(gameLoop.bind(this));
    }
  }.bind(this));
};





module.exports = Setup;
