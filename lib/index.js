const $ = require("jquery");
const Board = require("./board");
const bindKeys = require("./bind_keys");
const Setup = require("./setup");


require('./style.scss');

// add canvas to the container
$(document).ready(function() {
  var game = new Board();
  var setup = new Setup();
  bindKeys(game);
  //later on only call this once we are ready to start the game
  setup.start(game);
});
