const getLaneStarts = require("../util/get_lane_starts");
const getvConveyorBeltStarts = require("../util/get_conveyor_belt_starts");
const getvColorBlobStarts = require("../util/get_color_blob_starts");

function boardSettings() {
  var name                = "board";
  var width               = 997;
  var height              = 557;
  var laneCount           = 4;
  var cellCount           = 9;

  var conveyorAreaWidth   = width * 0.8;
  var loadingAreaWidth    = width * 0.2;
  var laneHeight          = height / laneCount;
  var conveyorBeltHeight  = laneHeight * 0.70;
  var cellWidth           = conveyorAreaWidth / (cellCount - 1);
  var colorBlobWidth      = cellWidth * 0.5;
  var colorBlobHeight     = conveyorBeltHeight * 0.5;

  var vLaneStarts         = getLaneStarts(laneCount, height);
  var vConveyorBeltStarts = getvConveyorBeltStarts(laneCount, height, conveyorBeltHeight);
  var vColorBlobStarts    = getvColorBlobStarts(vConveyorBeltStarts, conveyorBeltHeight);

  var conveyorAreaStart   = loadingAreaWidth;
  var loadingAreaStart    = 0;
  var hCellStart          = width - cellWidth;

  return {
    name:                name,
    width:               width,
    height:              height,
    laneCount:           laneCount,
    cellCount:           cellCount,

    conveyorAreaWidth:   conveyorAreaWidth,
    loadingAreaWidth:    loadingAreaWidth,
    cellWidth:           cellWidth,
    laneHeight:          laneHeight,
    vLaneStarts:         vLaneStarts,
    vConveyorBeltStarts: vConveyorBeltStarts,
    vColorBlobStarts:    vColorBlobStarts,
    conveyorBeltHeight:  conveyorBeltHeight,
    conveyorAreaStart:   conveyorAreaStart,
    hCellStart:          hCellStart,
    colorBlobWidth:      colorBlobWidth,
    colorBlobHeight:     colorBlobHeight,

    loadingAreaStart:    loadingAreaStart,
    canvasHtml:          "<canvas width="+width+" height="+height+" id="+name+"></canvas>"
  };
}

module.exports = boardSettings;
