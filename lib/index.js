const $ = require("jquery");
const Board = require("./board");
const bindKeys = require("./bind-keys");
const Setup = require("./setup");


require('./style.scss');


$(document).ready(function() {
  var game = new Board();
  var canvas = $(game.html).appendTo(".game-container");
  var setup = new Setup(canvas);


  bindKeys(game);
  $(document).on("keydown", function(e) {
    if ((e.keyCode === 13) && game.state.inProgress === false) {
      $(".header").html('');
      $(".score").html('');
      game.reset();
      setup.start(game);
      game.state.inProgress = true;
    }
  });
  //later on only call this once we are ready to start the game
  // setTimeout(setup.start.bind(game), 5000)
});
