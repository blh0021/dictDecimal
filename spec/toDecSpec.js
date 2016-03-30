'use strict';

var dd = require('../dictDecimal.js');

describe('converting numbers from dictDecimal to base 10', () => {
  
  it('"a" should be 10', () => {
    expect(dd.toDec('a')).toBe(10);
  });

  it('"aa" should be 170', () => {
    expect(dd.toDec('aa')).toBe(170);
  });

  it('"ff" should be 255', () => {
    expect(dd.toDec('ff')).toBe(255);
  });

});
