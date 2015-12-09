const getLaneStarts = require("../util/get_lane_starts");

function boardSettings() {
  var name               = "board";
  var width              = 997;
  var height             = 557;
  var laneCount          = 4;
  var cellCount          = 9;

  var conveyorAreaWidth  = width * 0.8;
  var loadingAreaWidth   = width * 0.2;
  var laneHeight         = height / laneCount;
  var vLaneStarts        = getLaneStarts(laneCount, height);
  var conveyorBeltHeight = laneHeight * 0.75;

  var conveyorAreaStart  = loadingAreaWidth;
  var loadingAreaStart   = 0;

  return {
    name:               name,
    width:              width,
    height:             height,
    laneCount:          laneCount,
    cellCount:          cellCount,

    conveyorAreaWidth:  conveyorAreaWidth,
    loadingAreaWidth:   loadingAreaWidth,
    laneHeight:         laneHeight,
    vLaneStarts:        vLaneStarts,
    conveyorBeltHeight: conveyorBeltHeight,
    conveyorAreaStart:  conveyorAreaStart,

    loadingAreaStart:   loadingAreaStart,
    canvasHtml:         "<canvas width="+width+" height="+height+" id="+name+"></canvas>"
  };
}

module.exports = boardSettings;
