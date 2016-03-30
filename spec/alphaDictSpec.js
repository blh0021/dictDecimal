'use strict'

var dd = require('../dictDecimal.js');

describe('add dict numbers', () => {

  beforeAll(() => {
    dd.dict = 'abcdefghijklmnopqrstuvwxyz';
  });

  afterAll(() => {
    dd.dict = '0123456789abcdef';
  });

  it('"a+a" should be a', () => {
    expect(dd.add('a', 'a')).toBe('a');
  });

  it('toDec "2" should throw error', () => {
    function getDec() {
      dd.toDec("2");
    }
    expect(getDec).toThrowError(TypeError, 'char "2" not in dictDecimal Dictionary');
  });

  it('adding "2" should throw error', () => {
    function add() {
      dd.add("a", "2");
    }
    expect(add).toThrowError(TypeError, 'char "2" not in dictDecimal Dictionary');
  });

  it('subtracting "2" should throw error', () => {
    function sub() {
      dd.sub("a", "2");
    }
    expect(sub).toThrowError(TypeError, 'char "2" not in dictDecimal Dictionary');
  });

  it('multiplying "2" should throw error', () => {
    function multi() {
      dd.multi("a", "2");
    }
    expect(multi).toThrowError(TypeError, 'char "2" not in dictDecimal Dictionary');
  });

  it('dividing "2" should throw error', () => {
    function div() {
      dd.div("a", "2");
    }
    expect(div).toThrowError(TypeError, 'char "2" not in dictDecimal Dictionary');
  });

});
