function boardSettings() {
  var width = 1334;
  var height = 750;
  var name = "board";

  return {
    name: name,
    laneCount: 4,
    width: width,
    height: height,
    canvasHtml: "<canvas width="+width+" height="+height+" id="+name+"></canvas>"
  };
}

module.exports = boardSettings;
