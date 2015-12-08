function boardSettings() {
  var width = 1334;
  var height = 750;
  var name = "board";

  return {
    name: name,
    lanes: 4,
    width: width,
    height: height,
    canvas: "<canvas width="+width+" height="+height+" id="+name+"></canvas>"
  };
}

module.exports = boardSettings;
