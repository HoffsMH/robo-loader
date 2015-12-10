const chai = require('chai');
const expect = chai.expect;

const Board = require('../lib/board');

describe('Board object', function () {
  let board = new Board();

  it('should be an object', function () {
    expect(board).to.be.a("Object");
  });

  describe("Board.state", function() {
    it("should exist", function() {
      expect(board.state).to.not.be.undefined
    });

  });

});
