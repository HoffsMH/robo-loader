const _ = require("lodash");

function getLaneStarts(laneCount, height) {
  var laneStarts = [0];
  if (laneCount === undefined || height === undefined) {
    return laneStarts
  }

  var increment = height/laneCount;
  _.times((laneCount - 1) ,function() {
    laneStarts.push(laneStarts[laneStarts.length-1] + increment );
  });
  return laneStarts;
}

module.exports = getLaneStarts;
