const chai = require('chai');
const expect = chai.expect;

const board = require('../lib/board');


describe('', function () {
  describe("loadingArea.laneDown()", function() {

    context("when not on the first lane", function() {
      beforeEach(function() {
        loadingArea.selectedLane = laneCount;
      });

      it("should decrement the selected lane", function() {
        var prev_lane = loadingArea.selectedLane;

        loadingArea.laneDown();

        expect(loadingArea.selectedLane).to.eq(prev_lane - 1);
      });

    });

    context("when on the first lane", function() {
      beforeEach(function() {
        loadingArea.selectedLane = 0;
      });

      it("should not decrement the selected lane", function() {
        var prev_lane = loadingArea.selectedLane;

        loadingArea.laneDown();

        expect(loadingArea.selectedLane).to.eq(prev_lane);
      });

    });

  });
});
