'use strict'

var dd = require('../dictDecimal.js');

describe('add dict numbers', () => {
  
  it('"a*a" should be 64', () => {
    expect(dd.multi('a', 'a')).toBe('64');
  });

  it('"aa*2" should be 154', () => {
    expect(dd.multi('aa', '2')).toBe('154');
  });


});
