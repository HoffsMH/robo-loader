const chai = require('chai');
const expect = chai.expect;

const getLaneHeight = require('../lib/util/get_lane_height');

describe('getLaneHeight', function () {
  let laneHeight = getLaneHeight;
  context("when given laneCount and height", function () {
    let height = laneHeight(4, 100);
    it("returns lane height", function () {
      expect(height).to.eq(25);
    });
  });

  context("when given laneCount and no height", function () {
    let height = laneHeight(4);
    it("returns NaN", function () {
      expect(height).to.be.NaN;
    });
  });

  context("when given no laneCount and no height", function () {
    let height = laneHeight();
    it("returns NaN", function () {
      expect(height).to.be.NaN;
    });
  });


});