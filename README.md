# A Browserify Transform for CSON

**Csonify** lets you use [CSON] files with [browserify] in the simplest way possible:

```js
var config = require('./config.cson')
```

## Setup

When creating your browserify bundle, just add this line:

```js
var csonify = require('csonify')
bundle.transform(csonify)
```

or in command line

```js
browserify -t csonify entry.js -o bundle.js
```

For convenience reason, [CSON] is in the return module:
`var csonify = require('csonify')`
`csonify.CSON.parse('things')`

[CSON]: https://github.com/bevry/cson
[browserify]: https://github.com/substack/node-browserify