const chai = require('chai');
const expect = chai.expect;

const LoadingArea = require('../lib/loading-area');

describe('Loading area object', function () {
  let loadingArea = new LoadingArea();

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

});
