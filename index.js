'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var instruments = require('./resources/json/instruments.json')
var platforms = require('./resources/json/platforms.json')
var sciencekeywords = require('./resources/json/sciencekeywords.json')

/**
 * @module mdkeywords
 */

var GCMD = {
  version: {
    edition: '8.6',
    date: '2018-12-12'
  },
  scienceKeywords: sciencekeywords,
  platforms: platforms,
  instruments: instruments
}

exports.GCMD = GCMD
