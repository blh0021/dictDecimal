'use strict'

var dd = require('../dictDecimal.js');

describe('mod dict numbers', () => {
  
  it('"a/a" should be 0', () => {
    expect(dd.mod('a', 'a')).toBe('0');
  });

  it('"aa/2" should be 0', () => {
    expect(dd.mod('aa', '2')).toBe('0');
  });

  it('"aa/3" should be 2', () => {
    expect(dd.mod('aa', '3')).toBe('2');
  });


});
