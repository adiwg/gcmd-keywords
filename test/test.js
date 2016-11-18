var assert = require('assert');
describe('GCMD', function () {

  beforeEach(function () {
    GCMD = require('../index.js');
  });

  describe('#isoTopicCategory', function () {
    it('should return an array', function () {
      assert.ok(Array.isArray(GCMD.isoTopicCategory));
    });
  });
  describe('#scienceKeywords', function () {
    it('should return an array', function () {
      assert.ok(Array.isArray(GCMD.scienceKeywords));
    });
  });
});
