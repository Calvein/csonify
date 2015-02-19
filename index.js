var CSON = require('cson')
var through = require('through')

function csonify(file) {
    if (!csonify.isCSON(file)) return through()

    var data = ''
    var stream = through(write, end)

    return stream

    function write(buf) {
        data += buf
    }

    function end() {
        csonify.compile(file, data, function(error, result) {
            if (error) stream.emit('error', error)
            stream.queue(result)
            stream.queue(null)
        })
    }
}

csonify.isCSON = function(s) {
    return /\.cson$/.test(s)
}

csonify.compile = function(file, data, cb) {
    var result = CSON.parseFile(file)

    if (result instanceof Error) {
        throw new Error(result)
    } else {
        cb(null, 'module.exports=' + JSON.stringify(result))
    }
}

csonify.CSON = CSON

module.exports = csonify