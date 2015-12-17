const _ = require("lodash");

function getConveyorBeltStarts(laneCount, height, conveyorBeltHeight) {
  var conveyorBeltStarts = [];
  if (laneCount === undefined || height === undefined) {
    return conveyorBeltStarts;
  }

  var laneHeight = height/laneCount;
  var conveyorBeltOffset = conveyorBeltHeight - laneHeight;
  _.times((laneCount) ,function(index) {
    conveyorBeltStarts.push((laneHeight * index) - conveyorBeltOffset);
  });
  return conveyorBeltStarts;
}

module.exports = getConveyorBeltStarts;
