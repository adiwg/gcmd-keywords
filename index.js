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
  var isoTopicCategory = (typeof require == 'function') ? require(
    './lib/js/isotopiccategory') : window.isotopiccategory;
  var sk = (typeof require == 'function') ? require(
    './lib/js/sciencekeywords') : window.sciencekeywords;

  var GCMD = {
    isoTopicCategory: isoTopicCategory,
    scienceKeywords: sk
  };
  
  // exports
  return GCMD;

});
