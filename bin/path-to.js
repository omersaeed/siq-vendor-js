#!/usr/bin/env node
var path = require('path');
console.log(path.dirname(require.resolve(process.argv[2])));
