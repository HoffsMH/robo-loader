const _     = require("lodash");
const chai = require('chai');

const expect = chai.expect;

const Board = require('../lib/board');

describe('Board object', function () {
  let board = new Board();

  afterEach(function() {
    board = new Board();
  });

  it('should be an object', function () {
    expect(board).to.be.a("Object");
  });

  describe("Board.state", function() {
    it("should exist", function() {
      expect(board.state).to.not.be.undefined;
    });

  });

  describe("getCurrentLaneIndex", function() {

    it("should get the index of the selected lane", function() {
      board.loadingArea.selectedLane.state.laneIndex = 2;

      expect(board.getCurrentLaneIndex()).to.eq(2);
    });

  });

  describe("getCurrentLane", function() {

    it("should get the currently selected lane", function() {
      board.loadingArea.selectedLane.state.laneIndex = 2;
      var resultLane = board.getCurrentLane();
      expect(resultLane.state.laneIndex).to.eq(2);
    });

  });

  describe("getCurrentDrs", function() {
    context("when there are no drs", function() {
      it("should get the currently set of drs", function() {
        var noDrs = [];
        _.each(board.settings.colors, function() {
          noDrs.push(0);
        }.bind(this));

        noDrs // [0,0,0] with three colors

        _.each(noDrs, function(dr, index) {

          expect(board.getCurrentDrs()[index]).to.eq(dr);

        }.bind(this));
      });

    });

  });

  describe("getCurrentDrs", function() {
    context("when there are drs", function() {
      it("should get the currently set of drs", function() {
        var drs = [1,0,0];
        board.getCurrentLane().state.currentDrs[0] = 1;

        _.each(drs, function(dr, index) {
          expect(board.getCurrentDrs()[index]).to.eq(dr);
        }.bind(this));
      });

    });

  });

  describe("getCurrentColorIndex", function() {
    context("when the current color is color 0", function() {
      it("should return 0", function() {
        board.loadingArea.state.colorIndex = 0;
        expect(board.getCurrentColorIndex()).to.eq(0);
      });

    });

  });

  describe("getCurrentColorIndex", function() {
    context("when the current color is color 2", function() {
      it("should return 2", function() {
        board.loadingArea.state.colorIndex = 2;
        expect(board.getCurrentColorIndex()).to.eq(2);
      });

    });

  });

  describe("getNextBlobAmount", function() {
    context("when there is no dr", function() {
      it("should return the starting amount", function() {
        var startingBlobCount = board.settings.drCategories[0];
        expect(board.getNextBlobAmount()).to.eq(startingBlobCount);
      });

    });

    context("when there is one level of dr", function() {
      it("should return the second dr amount", function() {
        board.state.inProgress = true;
        var secondBlobCount = board.settings.drCategories[1];

        board.playerEvents.putBlobs();

        expect(board.getNextBlobAmount()).to.eq(secondBlobCount);
      });

    });

    describe("getBlobCells", function() {
      context("when there is no dr", function() {
        it("should return n last cells of the current lane where n is the current dr amount", function() {
          board.state.inProgress = true;
          var startingBlobCount = board.settings.drCategories[0];

          expect(board.getBlobCells().length).to.eq(startingBlobCount);
        });

      });

      context("when there is a dr", function() {
        it("should return n last cells of the current lane where n is the current dr amount", function() {
          board.state.inProgress = true;
          var secondBlobCount = board.settings.drCategories[1];
          board.playerEvents.putBlobs();
          expect(board.getBlobCells().length).to.eq(secondBlobCount);
        });

      });

    });


  });

});
