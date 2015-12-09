const chai = require('chai');
const expect = chai.expect;

const getLaneHeight = require('../lib/util/get_lane_height');

describe('getLaneHeight', function () {
  let laneHeight = getLaneHeight
  context("when given laneheight and count", function () {
    let height = laneHeight(4, 100)
    it("returns lane height", function () {
      expect(height).to.eq(100)
    });
  });


});
