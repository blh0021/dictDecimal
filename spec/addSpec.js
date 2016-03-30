'use strict'

var dd = require('../dictDecimal.js');

describe('add dict numbers', () => {
  
  it('"a+a" should be 14', () => {
    expect(dd.add('a', 'a')).toBe('14');
  });

  it('"aa+2" should be 85', () => {
    expect(dd.add('aa', '2')).toBe('ac');
  });


});
