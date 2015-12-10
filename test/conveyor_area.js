const chai = require('chai');
const expect = chai.expect;

const ConveyorArea = require('../lib/conveyor_area');
const Lane = require('../lib/lane');

describe('ConveyorArea object', function () {
  let conveyorArea = new ConveyorArea();

  it('should be an object', function () {
    expect(conveyorArea).to.be.a("Object");
  });
  describe("ConveyorArea state", function() {

    it("should exist", function () {
      expect(conveyorArea.state).to.not.eq(undefined);
    });

  });

  describe("ConveyorArea.lanes", function() {
    let lanes = conveyorArea.lanes;

    it("should exist", function() {
      expect(lanes).to.not.be.undefined;
    });

    it("should be an array of lane objects", function() {
      expect(lanes).to.be.an("Array");

      lanes.forEach(function(lane) {
        expect(lane.constructor).to.eq(Lane);
      });

    });

  });

});
