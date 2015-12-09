const $ = require("jquery");
const Board = require("./board");
const bindKeys = require("./bind_keys");


// add canvas to the container
$(document).ready(function() {
  var game = new Board();
  bindKeys(game);

  //after adding the canvas we put the game in a ready state
  //which is to say we initialize it

  //after initialization a user can choose to start() the game
  //for now we can just call  game.start();
  game.start();

});

// initialize the game within the canvas
