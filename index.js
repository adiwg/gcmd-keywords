/**
 * @module GCMD
 */

(function (name, context, definition) {
  if(typeof exports == 'object') {
    module.exports = definition(require);
  } else if(typeof define == 'function' && define.amd) {
    define(definition);
  } else if(typeof YUI == "function") {
    YUI.add(name, definition, '@VERSION@', {
      requires: []
    });
  } else {
    context[name] = definition();
  }
})
.call(this, 'GCMD', this, function (require) {
  'use strict';

  // imports
  var sk = (typeof require == 'function') ? require(
    './lib/js/sciencekeywords') : window.sciencekeywords;
  var pl = (typeof require == 'function') ? require(
    './lib/js/platforms') : window.platforms;
  var ins = (typeof require == 'function') ? require(
    './lib/js/instruments') : window.instruments;

  var GCMD = {
    scienceKeywords: sk,
    platforms: pl,
    instruments: ins
  };

  // exports
  return GCMD;

});
