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
  return game.playerEvents
  .laneUp.bind(game.playerEvents);
}

function laneDown(game) {
  return game.playerEvents
  .laneDown.bind(game.playerEvents);
}

function colorDown(game) {
  return game.playerEvents
  .colorDown.bind(game.playerEvents);
}

function colorUp(game) {
  return game.playerEvents
  .colorUp.bind(game.playerEvents);
}


function putBlob(game) {
  return game.playerEvents
  .putBlobs.bind(game.playerEvents);
}

function bindKeysToFunc(keys, func) {
  $(document).on("keydown", function(e) {
    if (keys.includes(e.keyCode)) {func();}
  });
}
