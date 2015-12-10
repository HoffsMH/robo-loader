const chai = require('chai');
const expect = chai.expect;


const Lane = require('../lib/lane');

describe('ConveyorArea object', function () {
  let lane = new Lane();

  it('should be an object', function () {
    expect(lane).to.be.a("Object");
  });
  describe("lane state", function() {

    it("should exist", function () {
      expect(lane.state).to.not.eq(undefined);
    });

  });

});
