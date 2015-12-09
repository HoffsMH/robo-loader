const $ = require("jquery");
// const _ = require("lodash");

function bindKeys(game){
  var downArrow = 40;
  var upArrow = 38;

  bindKeysToFunc([downArrow], game.laneUp.bind(game));
  bindKeysToFunc([upArrow], game.laneDown.bind(game));

}

module.exports = bindKeys;


function bindKeysToFunc(keys, func) {
  $(document).on("keydown", function(e) {
    if (keys.includes(e.keyCode)) {func();}
  });
}
