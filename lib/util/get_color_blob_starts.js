const _ = require("lodash");

function getvColorBlobStarts(vConveyorBeltStarts, conveyorBeltHeight) {
  var vColorBlobStarts = [];
  _.each(vConveyorBeltStarts, function (start) {
    var vCellOffset = (conveyorBeltHeight * 0.25);
    vColorBlobStarts.push(start + vCellOffset);
  });
  return vColorBlobStarts;
}

module.exports = getvColorBlobStarts;
