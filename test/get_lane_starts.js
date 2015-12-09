const chai = require('chai');
const expect = chai.expect;

const getLaneStarts = require('../lib/util/get_lane_starts');

describe('getLaneHeight', function () {
  let laneStarts = getLaneStarts;
  context("when given laneCount and height", function () {
    let starts = laneStarts(4, 100);
    it("returns lane Starts", function () {
      var expected_starts = [ 0, 25, 50, 75 ];
      expected_starts.forEach(function(start) {
        expect(starts).to.include(start);
      });
    });
  });

  context("when given laneCount and no height", function () {
    let starts = laneStarts(4);
    it("returns [0]", function () {
      var expected_starts = [0];
      expected_starts.forEach(function(start) {
        expect(starts).to.include(start);
      });
    });
  });

  context("when given no laneCount and no height", function () {
    let starts = laneStarts(4);
    it("returns [0]", function () {
      var expected_starts = [0];
      expected_starts.forEach(function(start) {
        expect(starts).to.include(start);
      });
    });
  });


});
