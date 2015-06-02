/*!
 * has-keys <https://github.com/jonschlinkert/has-keys>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var assert = require('assert');
var should = require('should');
var hasKeys = require('./');

var keys = ['a', 'b', 'c', 'd'];

describe('hasKeys', function () {
  var obj = {a: 'a', b: 'b', c: 'c'};

  it('should return true when all keys exist:', function () {
    assert.equal(hasKeys(obj, ['a', 'b', 'c']), true);
  });

  it('should return false when all keys do not exist:', function () {
    assert.equal(hasKeys(obj, ['a', 'b', 'c', 'd']), false);
  });

  it('should throw an error when invalid args are passed:', function () {
    (function () {
      hasKeys();
    }).should.throw('has-keys expects an object.');
  });
});
