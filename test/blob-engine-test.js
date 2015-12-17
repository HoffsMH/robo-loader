const _      = require("lodash");
const chai   = require('chai');
const expect = chai.expect;
const Board  = require('../lib/board');
const BlobEngine  = require('../lib/blob-engine');

describe('blob engine object', function () {
  let game =  new Board();
  let blobEngine = new BlobEngine(game);

  describe("checkforFreshDr()", function() {
    it("returns true if the given color is on dr on the given lane", function() {
      var currentDrs = [2,0,0];
      var colorIndex = 0;

      expect(blobEngine.checkForFreshDr(currentDrs, colorIndex)).to.eq(false);

      currentDrs = [0,0,0];
      colorIndex = 0;

      expect(blobEngine.checkForFreshDr(currentDrs, colorIndex)).to.eq(true);
    });

  });

  describe("countIsUp()", function() {
    context("when the given dr counter has expired", function() {
      it("returns true", function() {
        var colorIndex = 1;
        var laneIndex = 0;

        game.drCounters[colorIndex][laneIndex] = 0;

        var result =blobEngine.countIsUp(colorIndex, laneIndex);

        expect(result).to.eq(true);
      });

    });

    context("when the given dr counter has not expired", function() {
      it("returns false", function() {
        var colorIndex = 1;
        var laneIndex = 0;

        game.drCounters[colorIndex][laneIndex] = 13;

        var result = blobEngine.countIsUp(colorIndex, laneIndex);

        expect(result).to.eq(false);
      });

    });

  });

  describe("clearDr()", function() {
    context("no matter what", function() {
      it("should clear out th dr for the given color and lane", function() {
        var currentDrs =
        var colorIndex =
        var laneIndex  = 
        var counter    =
      });
    });
  });

});
