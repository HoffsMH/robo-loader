var incGet = {
  getChild: function(x) {
    if (x) {
      return this.state.children[x];
    } else {
      return this.state.children;
    }
  },

  getBase: function(x) {
    return this.state.base[x];
  },

  incBase: function(x, value) {
    return this.state.base[x] += value;
  },

  getState: function(x) {
    return this.state[x];
  }
};


module.exports = incGet;
