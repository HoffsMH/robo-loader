const _                    = require("lodash");
const selectedLaneSettings = require("./game-settings/selected-lane-settings");

function SelectedLane(settings) {
  this.settings = settings || selectedLaneSettings();
  this.state = {
    laneIndex:  0,
    colorIndex:  0,
    drCounters: this.getStartingIndexes(),
    blobAmountIndex: this.getStartingIndexes(),
    changed:        true,
    base: {
      type:         "basic",
      x:            this.settings.x,
      y:            this.settings.y,
      width:        this.settings.width,
      height:       this.settings.height,
      fillColor:    this.settings.fillColor,
      lineWidth:    this.settings.lineWidth,
      strokeStyle:  this.settings.lineWidth,
      text:         true,
      getMainText:  this.getMainText.bind(this),
      getSubText:   this.getSubText.bind(this)
    },
    children: {}
  };
}

SelectedLane.prototype.getStartingIndexes = function() {
  return _.map(this.settings.colors, function() {
    var output = [];
    _.times(this.settings.laneCount, function(){
      output.push(0);
    }.bind(this));
    return output;
  }.bind(this));
};

SelectedLane.prototype.decrementBlobAmount = function() {
  var laneIndex = this.state.laneIndex;
  var colorIndex = this.state.colorIndex;
  var blobAmountIndex = this.state.blobAmountIndex[colorIndex];

  if (blobAmountIndex[laneIndex] < this.settings.drCategories.length - 1){
      blobAmountIndex[laneIndex] += 1;
  }
  console.log(this.settings.drCategories[blobAmountIndex[laneIndex]]);
};

SelectedLane.prototype.getMainText = function() {
  var laneIndex = this.state.laneIndex;
  var colorIndex = this.state.colorIndex;
  var blobAmountIndex = this.state.blobAmountIndex[colorIndex];

  return this.settings.drCategories[blobAmountIndex[laneIndex]];
};

SelectedLane.prototype.getSubText = function() {
  var laneIndex = this.state.laneIndex;
  var colorIndex = this.state.colorIndex;
  if (this.state.drCounters[colorIndex][laneIndex]){
    return "/ " + this.state.drCounters[colorIndex][laneIndex]+" s";
  } else {
    return "";
  }
};
module.exports = SelectedLane;
