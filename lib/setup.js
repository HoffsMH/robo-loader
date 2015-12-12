const CanvasEngine = require("./canvas-engine");


function Setup() {
}

Setup.prototype.start = function(game) {
  var canvasEngine = new CanvasEngine(game.html);

  requestAnimationFrame(function gameLoop() {
    canvasEngine.render(game);

    if (game.state.inProgress) {
      requestAnimationFrame(gameLoop.bind(this));
    }
  }.bind(this));
};





module.exports = Setup;
