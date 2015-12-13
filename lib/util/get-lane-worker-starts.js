const _ = require("lodash");

function getvLaneWorkerStarts(vLaneStarts, laneWorkerAreaHeight) {
  var vLaneWorkerStarts = [];
  _.each(vLaneStarts, function (start) {
    var vCellOffset = (laneWorkerAreaHeight * 0.20);
    vLaneWorkerStarts.push(start + vCellOffset);
  });
  return vLaneWorkerStarts;
}

module.exports = getvLaneWorkerStarts;
