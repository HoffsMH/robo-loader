const chai = require('chai');

const expect = chai.expect;

const Board = require('../lib/board');
const incGet = require('../lib/util/inc-get');
const extend = require('../lib/util/extend');

describe('incGet', function () {
  let game = new Board();
  it("can extend itself to other objects", function() {
    extend(Board.prototype , incGet);

    expect(game).to.respondTo('getBase');
    expect(game).to.respondTo('incBase');
    expect(game).to.respondTo('getChild');
  });

});
