const chai = require('chai');
const expect = chai.expect;

const LoadingArea = require('../lib/loading_area');

describe('Loading area object', function () {
  let loadingArea = new LoadingArea();

  it('should be an object', function () {
    expect(loadingArea).to.be.a("Object");
  });
  context("loading area state", function() {

    it("should exist", function () {
      expect(loadingArea.state).to.not.eq(undefined);
    });

    it('should have a currently selected lane', function () {
      expect(loadingArea.state.selected).to.not.eq(undefined);
    });

    it('should have a default selected lane of 0', function () {
      expect(loadingArea.state.selected).to.eq(0);
    });

  });

  describe("loadingArea.laneUp()", function() {

    context("when not on the last lane", function() {

      it("should increment the selected lane", function() {
        var prev_lane = loadingArea.state.selected;

        loadingArea.laneUp();

        expect(loadingArea.state.selected).to.eq(prev_lane + 1);
      });

    });

    context("when on the last lane", function() {

      it("should increment the selected lane", function() {
        loadingArea.state.selected = laneCount;

        var laneCount = loadingArea.settings.laneCount;
        var prev_lane = loadingArea.state.selected;

        loadingArea.laneUp();

        expect(loadingArea.state.selected).to.eq(prev_lane);
      });

    });

  });

});
