function boardSettings() {
  var width = 997;
  var height = 557;
  var name = "board";
  var conveyorAreaWidth = width * 0.8;
  var loadingAreaWidth = width * 0.2;

  var conveyorAreaStart = loadingAreaWidth;
  var loadingAreaStart = 0;

  return {
    name:              name,
    laneCount:         4,
    width:             width,
    height:            height,
    canvasHtml:        "<canvas width="+width+" height="+height+" id="+name+"></canvas>",
    conveyorAreaWidth: conveyorAreaWidth,
    loadingAreaWidth:  loadingAreaWidth,
    conveyorAreaStart: conveyorAreaStart,
    loadingAreaStart:  loadingAreaStart
  };
}

module.exports = boardSettings;
