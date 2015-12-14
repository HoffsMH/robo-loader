const chai = require('chai');
const expect = chai.expect;

const LoadingArea = require('../lib/loading_area');

describe('Loading area object', function () {
  let loadingArea = new LoadingArea();
  let laneCount = loadingArea.settings.laneCount;


  it('should be an object', function () {
    expect(loadingArea).to.be.a("Object");
  });

  describe("loading area state", function() {

    it("should exist", function () {
      expect(loadingArea.state).to.not.eq(undefined);
    });

    it('should have a currently selected lane', function () {
      expect(loadingArea.selectedLane).to.not.eq(undefined);
    });

    it('should have a default selected lane of 0', function () {
      expect(loadingArea.selectedLane.state.laneIndex).to.eq(0);
    });

  });

  describe("loadingArea.laneUp()", function() {

    context("when not on the last lane", function() {
      beforeEach(function(){
        loadingArea.selectedLane = 0;
      });

      it("should increment the selected lane", function() {
        var prev_lane = loadingArea.state.selectedLane;

        loadingArea.laneUp();

        expect(loadingArea.selectedLane).to.eq(prev_lane + 1);
      });

    });

    context("when on the last lane", function() {
      beforeEach(function() {
        loadingArea.selectedLane = laneCount;
      });

      it("should not increment the selected lane", function() {
        var prev_lane = loadingArea.selectedLane;

        loadingArea.laneUp();

        expect(loadingArea.selectedLane).to.eq(prev_lane);
      });

    });

  });

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
