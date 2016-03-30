'use strict'

var dd = require('../dictDecimal.js');

describe('subtract dict numbers', () => {
  
  it('"a-a" should be 0', () => {
    expect(dd.sub('a', 'a')).toBe('0');
  });

  it('"aa-2" should be a8', () => {
    expect(dd.sub('aa', '2')).toBe('a8');
  });


});
