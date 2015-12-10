const $ = require("jquery");
// const _ = require("lodash");

function bindKeys(game){
  var downArrow = 40;
  var upArrow = 38;
  var w = 87;
  var s = 83;
  var a = 65;
  var d = 68;
  var enter = 13;

  bindKeysToFunc([downArrow, s], laneUp(game));
  bindKeysToFunc([upArrow, w], laneDown(game));
  bindKeysToFunc([a], colorDown(game));
  bindKeysToFunc([d], colorUp(game));

  bindKeysToFunc([enter], putBlob(game));

}

module.exports = bindKeys;

function laneUp(game) {
  return game.loadingArea.laneUp.bind(game.loadingArea);
}

function laneDown(game) {
  return game.loadingArea.laneDown.bind(game.loadingArea);
}

function colorDown(game) {
  return game.loadingArea.colorDown.bind(game.loadingArea);
}

function colorUp(game) {
  return game.loadingArea.colorUp.bind(game.loadingArea);
}


function putBlob(game) {
  return game.putBlob.bind(game);
}




function bindKeysToFunc(keys, func) {
  $(document).on("keydown", function(e) {
    if (keys.includes(e.keyCode)) {func();}
  });
}
