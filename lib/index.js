const $ = require("jquery");
const Board = require("./board");


// add canvas to the container
$(document).ready(function() {
  var board = new Board();
  $(board.canvas).appendTo("body")
  console.log(board.settings);


});

// initialize the game within the canvas
