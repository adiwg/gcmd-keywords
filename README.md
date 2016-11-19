# gcmd-keywords
JSON-formatted Global Change Master Directory (GCMD) Keywords

The keywords are pulled and formatted from the GCMD webservice using [fetchGCMD.pl](https://gist.github.com/jlblcc/8700993).

More information on GCMD Keywords can be found [here](https://earthdata.nasa.gov/about/gcmd/global-change-master-directory-gcmd-keywords).

## Citation
> Global Change Master Directory (GCMD). 2016. GCMD Keywords, Version 8.4. Greenbelt, MD: Global Change Data Center, Science and Exploration Directorate, Goddard Space Flight Center (GSFC) National Aeronautics and Space Administration (NASA). URL (GCMD Keyword Forum Page): [http://earthdata.nasa.gov/gcmd-forum](http://earthdata.nasa.gov/gcmd-forum)

[![NPM Version][npm-image]][npm-url] [![Linux Build][travis-image]][travis-url]

## Install
### nodejs

```bash
npm install gcmd-keywords
```

### bower

```bash
bower install gcmd-keywords
```

## Test

```bash
npm test
```

## Usage
### Node.js

```js
//all lists
var gcmd = require ('gcmd-keywords');
//single lists
var sciencekeywords = require ('gcmd-keywords/lib/js/sciencekeywords');
```

### POJO (jQuery)

```js
$.ajax({
  method: "GET",
  url: "resources/json/sciencekeywords.json",
  dataType: "json"
});
```

## License
[GNU GPLv3](http://choosealicense.com/licenses/gpl-3.0/)

[npm-image]: https://img.shields.io/npm/v/gcmd-keywords.svg
[npm-url]: https://npmjs.org/package/gcmd-keywords
[travis-image]: https://img.shields.io/travis/live-js/gcmd-keywords/master.svg
[travis-url]: https://travis-ci.org/live-js/gcmd-keywords
