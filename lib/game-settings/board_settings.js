const getLaneStarts          = require("../util/get_lane_starts");
const getvConveyorBeltStarts = require("../util/get_conveyor_belt_starts");
const getvColorBlobStarts    = require("../util/get_color_blob_starts");
const getLaneWorkerStarts    = require("../util/get-lane-worker-starts");

function boardSettings() {
  var name                = "board";
  var width               = 997;
  var height              = 557;
  var laneCount           = 4;
  var cellCount           = 9;
  var colors = [
    {name: "yellow", selected: "#D4CA6A", bg: "#AA9F39"},
    {name: "green", selected: "#5FAE57", bg: "#378B2E"},
    {name: "red", selected: "#D1686D", bg: "#A7383E"}
  ];
  var drCategories         = [3,2,1,0];
  var startingDrCount      = 20;
  var conveyorSpeed        = 0.5;

  var beltEnd              = width;
  var conveyorAreaWidth    = width * 0.8;
  var loadingAreaWidth     = width * 0.2;
  var laneHeight           = height / laneCount;
  var conveyorBeltHeight   = laneHeight * 0.70;
  var cellWidth            = conveyorAreaWidth / (cellCount - 1);

  var colorBlobWidth       = cellWidth * 0.5;
  var colorBlobHeight      = conveyorBeltHeight * 0.5;

  var laneWorkerAreaHeight = (laneHeight - conveyorBeltHeight);
  var laneWorkerHeight     =  laneWorkerAreaHeight - (laneWorkerAreaHeight * 0.20);


  var laneWorkerWidth      = colorBlobWidth;

  var vLaneStarts          = getLaneStarts(laneCount, height);
  var vConveyorBeltStarts  = getvConveyorBeltStarts(laneCount, height, conveyorBeltHeight);
  var vColorBlobStarts     = getvColorBlobStarts(vConveyorBeltStarts, conveyorBeltHeight);
  var vLaneWorkerStarts    = getLaneWorkerStarts(vLaneStarts, laneWorkerAreaHeight);

  var conveyorAreaStart    = loadingAreaWidth;
  var loadingAreaStart     = 0;
  var hCellStart           = width - cellWidth;



  return {
    name:                name,
    width:               width,
    height:              height,
    laneCount:           laneCount,
    cellCount:           cellCount,
    colors:              colors,
    drCategories:        drCategories,
    startingDrCount:     startingDrCount,
    conveyorSpeed:       conveyorSpeed,
    beltEnd:             beltEnd,

    conveyorAreaWidth:   conveyorAreaWidth,
    loadingAreaWidth:    loadingAreaWidth,
    cellWidth:           cellWidth,
    laneHeight:          laneHeight,

    conveyorAreaStart:   conveyorAreaStart,
    vLaneStarts:         vLaneStarts,
    vConveyorBeltStarts: vConveyorBeltStarts,
    vColorBlobStarts:    vColorBlobStarts,
    vLaneWorkerStarts:   vLaneWorkerStarts,

    conveyorBeltHeight:  conveyorBeltHeight,

    laneWorkerHeight:    laneWorkerHeight,
    laneWorkerWidth:     laneWorkerWidth,

    hCellStart:          hCellStart,
    colorBlobWidth:      colorBlobWidth,
    colorBlobHeight:     colorBlobHeight,

    loadingAreaStart:    loadingAreaStart,
    canvasHtml:          "<canvas width="+width+" height="+height+" id="+name+"></canvas>"
  };
}

module.exports = boardSettings;
