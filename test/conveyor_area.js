const chai = require('chai');
const expect = chai.expect;

const ConveyorArea = require('../lib/conveyor_area');

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
    it("should exist", function() {

    });

  });

});
