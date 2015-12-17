const _ = require("lodash");
const chai = require('chai');
const expect = chai.expect;

const Board = require('../lib/board');


describe('PlayerEvents', function () {
  let game = new Board();
  describe("laneDown()", function() {
    context("we are not on the first lane", function() {
      beforeEach(function(){
        game.selectedLane.state.laneIndex = 1;
      });

      it("should decrement the selected lane", function() {
        var prev_lane = game.getCurrentLaneIndex();

        game.playerEvents.laneDown();

        expect(game.getCurrentLaneIndex()).to.eq(prev_lane - 1);
      });

    });

    context("we are on the first lane", function() {
      beforeEach(function(){
        game.selectedLane.state.laneIndex = 0;
      });

      it("should roll back to the last lane", function() {
        var lastLaneIndex = game.settings.laneCount - 1;

        game.playerEvents.laneDown();

        expect(game.getCurrentLaneIndex()).to.eq(lastLaneIndex);
      });

    });


  });

  describe("laneUp()", function() {
    context("we are not on the last lane", function() {
      beforeEach(function(){
        game.selectedLane.state.laneIndex = 1;
      });

      it("should increment the selected lane", function() {
        var prev_lane = game.getCurrentLaneIndex();

        game.playerEvents.laneUp();

        expect(game.getCurrentLaneIndex()).to.eq(prev_lane + 1);
      });

    });

    context("we are on the last lane", function() {
      beforeEach(function(){
        var lastLaneIndex = game.settings.laneCount - 1;
        game.selectedLane.state.laneIndex = lastLaneIndex;
      });

      it("should roll back to the first lane", function() {
        game.playerEvents.laneUp();

        expect(game.getCurrentLaneIndex()).to.eq(0);
      });

    });

  });


  describe("colorUp()", function() {
    context("we are not on the last color", function() {
      beforeEach(function(){
        game.loadingArea.state.colorIndex  = 0;
        game.selectedLane.state.colorIndex = 0;
      });

      it("should increment the color", function() {
        var prev_color = game.getCurrentColorIndex();

        game.playerEvents.colorUp();

        expect(game.getCurrentColorIndex()).to.eq(prev_color + 1);
      });

    });

    context("we are on the last color", function() {
      beforeEach(function(){
        var lastColorIndex = game.settings.colors.length - 1;
        game.loadingArea.state.colorIndex  = lastColorIndex;
        game.selectedLane.state.colorIndex = lastColorIndex;
      });

      it("should roll back to the first color", function() {
        game.playerEvents.colorUp();

        expect(game.getCurrentColorIndex()).to.eq(0);
      });

    });

  });

  describe("colorDown()", function() {
    context("we are not on the first color", function() {
      beforeEach(function(){
        game.loadingArea.state.colorIndex  = 1;
        game.selectedLane.state.colorIndex = 1;
      });

      it("should decrement the selected lane", function() {
        var prev_color = game.getCurrentColorIndex();

        game.playerEvents.colorDown();

        expect(game.getCurrentColorIndex()).to.eq(prev_color - 1);
      });

    });

    context("we are on the first color", function() {
      beforeEach(function(){
        game.loadingArea.state.colorIndex  = 0;
        game.selectedLane.state.colorIndex = 0;
      });

      it("should roll back to the last color", function() {
        game.playerEvents.colorDown();

        expect(game.getCurrentColorIndex()).to.eq(game.settings.colors.length - 1);
      });

    });

  });

  describe("putBlobs", function(){
    context("when the game is not in progress", function() {
      it("does nothing", function() {
        expect(game.playerEvents.putBlobs()).to.eq(false);

        _.each(game.getBlobCells(), function(cell) {
          expect(cell.colorBlob).to.be.undefined
        }.bind(this));

      });


    });

    context("when the game is in", function() {
      it("does nothing", function() {
        game.state.inProgress = true;
        expect(game.playerEvents.putBlobs()).to.not.eq(false);

        _.each(game.getBlobCells(), function(cell) {
          expect(cell.state.children.colorBlob).to.not.be.undefined
        }.bind(this));

      });


    });

  });

});
