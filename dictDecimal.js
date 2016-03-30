'use strict';

var DictDecimal = {

  dict: "0123456789abcdef".split(''),

  toDec: function(n) {
    let s = 0;
    n = n.split('');
    for (let i in n) {
      if (this.dict.indexOf(n[i]) == -1) {
        throw new TypeError('char "' + n[i] + '" not in dictDecimal Dictionary'); 
      }
      s += Math.pow(this.dict.length, n.length - i - 1) * this.dict.indexOf(n[i]);
    }
    return s;
  },

  toDict: function(n) {
    if (n == 0) return this.dict[0];
    var l = this.dict.length;
    var s = '';
    while (n > 0) {
      s = this.dict[n % l] + s;
      n = Math.floor(n / l);
    }
    return s;
  },

  add: function(a, b) {
    return this.toDict(this.toDec(a) + this.toDec(b));
  },

  div: function(a, b) {
    return this.toDict(this.toDec(a) / this.toDec(b));
  },

  mod: function(a, b) {
    return this.toDict(this.toDec(a) % this.toDec(b));
  },

  multi: function(a, b) {
    return this.toDict(this.toDec(a) * this.toDec(b));
  },

  sub: function(a, b) {
    return this.toDict(this.toDec(a) - this.toDec(b));
  }

}

module.exports = DictDecimal;
