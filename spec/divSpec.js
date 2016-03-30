'use strict'

var dd = require('../dictDecimal.js');

describe('divide dict numbers', () => {
  
  it('"a/a" should be 1', () => {
    expect(dd.div('a', 'a')).toBe('1');
  });

  it('"aa/2" should be 85', () => {
    expect(dd.div('aa', '2')).toBe('55');
  });


});
