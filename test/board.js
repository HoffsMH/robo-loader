const chai = require('chai');
const expect = chai.expect;

const Board = require('../lib/board');

describe('Board object', function () {
  it('should be an object', function () {
    var board = new Board();
    
    expect(board).to.be.a("Object");
  });
});
