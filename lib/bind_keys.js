const $ = require("jquery");
// const _ = require("lodash");

function bindKeys(game){
  var downArrow = 40;
  var upArrow = 38;

  bindKeysToFunc([downArrow], laneUp(game));
  bindKeysToFunc([upArrow], laneDown(game));

}

module.exports = bindKeys;

function laneUp(game) {
  return game.loadingArea.laneUp.bind(game.loadingArea);
}

function laneDown(game) {
  return game.loadingArea.laneDown.bind(game.loadingArea);
}



function bindKeysToFunc(keys, func) {
  $(document).on("keydown", function(e) {
    if (keys.includes(e.keyCode)) {func();}
  });
}
