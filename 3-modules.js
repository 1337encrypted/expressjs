// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
require('./7-require-functions');

sayHi('shady');
sayHi(names.john);
sayHi(names.peter);

console.log(data);

