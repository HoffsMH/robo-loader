const _ = require("lodash");

function getConveyorBeltStarts(laneCount, height, conveyorBeltHeight) {
  var conveyorBeltStarts = [0];
  if (laneCount === undefined || height === undefined) {
    return conveyorBeltStarts;
  }

  var laneHeight = height/laneCount;
  var conveyorBeltOffset = conveyorBeltHeight - laneHeight;
  _.times((laneCount - 1) ,function() {
    var prev_start = conveyorBeltStarts[conveyorBeltStarts.length-1];
    conveyorBeltStarts.push((prev_start + laneHeight) - (conveyorBeltOffset) );
  });
  return conveyorBeltStarts;
}

module.exports = getConveyorBeltStarts;
