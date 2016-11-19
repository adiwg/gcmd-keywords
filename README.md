# gcmd-keywords
JSON-formatted Global Change Master Directory (GCMD) Keywords

## About

The keywords are formatted in a hierarchical tree. The keywords are pulled and
formatted from the GCMD webservice using
[fetchGCMD.pl](https://gist.github.com/jlblcc/8700993). More information on GCMD
Keywords can be found
[here](https://earthdata.nasa.gov/about/gcmd/global-change-master-directory-gcmd-keywords).

The following keyword schemes are included:
- Earth Science and Earth Science Services    
- Instruments/Sensors    
- Platforms/Sources

Due to file size, the definitions are only included with the _Earth Science and
Earth Science Services_ keyword set. It is possible to obtain the definitions
dynamically using the GCMD webservice
([example](http://gcmdservices.gsfc.nasa.gov/kms/concept/3aa4763b-bc85-4609-96fe-0d0eff904fef.xml)).
The `hasDefinition` property indicates keywords that have definitions assigned
but not included in the JSON.

### Format
```js
{
  "uuid": "6c0e547e-70cc-47db-8c8c-97c5ba73f1da", //unique id
  "broader": "386ea533-9d98-4202-bad3-bb630ac39a93", //parent id
  "label": "Cameras",
  "definition": "Incididunt cillum enim laborum enim consectetur do officia.",
  "children": [{
    "label": "CBERS",
    "uuid": "efa1e3d9-c9b8-485d-ae7e-b4616040e4fd",
    "hasDefinition": 1, //displayed if a definition exists, but not included
    "broader": "6c0e547e-70cc-47db-8c8c-97c5ba73f1da"
  }]
}
```

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
