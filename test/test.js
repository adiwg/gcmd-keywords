var assert = require('assert');
describe('GCMD', function () {

  beforeEach(function () {
    GCMD = require('../index.js');
  });

  describe('#platforms', function () {
    it('should return an array', function () {
      assert.ok(Array.isArray(GCMD.platforms));
    });
  });
  describe('#scienceKeywords', function () {
    it('should return an array', function () {
      assert.ok(Array.isArray(GCMD.scienceKeywords));
    });
  });
  describe('#instruments', function () {
    it('should return an array', function () {
      assert.ok(Array.isArray(GCMD.instruments));
    });
  });
  describe('#version', function () {
    it('should return a string', function () {
      var v = GCMD.version;
      assert.ok(!!v && typeof v === 'string' || v instanceof String);
    });
  });
});
