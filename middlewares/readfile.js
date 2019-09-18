const fs = require('fs');

const util = require('util');

const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8')

module.exports = readFile;