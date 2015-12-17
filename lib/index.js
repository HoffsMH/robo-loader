const $ = require("jquery");
const Board = require("./board");
const bindKeys = require("./bind_keys");
const Setup = require("./setup");


require('./style.scss');


$(document).ready(function() {
  var game = new Board();
  var canvas = $(game.html).appendTo(".game-container");
  var setup = new Setup(canvas);
  bindKeys(game);
  //later on only call this once we are ready to start the game
  setup.start(game);
});
