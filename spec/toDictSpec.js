'use strict';

var dd = require('../dictDecimal.js');

describe('converting numbers from base 10 to dictDecimal', () => {
  
  it('"0" should be "0"', () => {
    expect(dd.toDict(0)).toBe('0');
  });

  it('"10" should be "a"', () => {
    expect(dd.toDict(10)).toBe('a');
  });

  it('"16" should be "10"', () => {
    expect(dd.toDict(16)).toBe('10');
  });

  it('"170" should be "aa"', () => {
    expect(dd.toDict(170)).toBe('aa');
  });

  it('"255" should be "ff"', () => {
    expect(dd.toDict(255)).toBe('ff');
  });

});
