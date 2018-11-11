
//path module
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);


//os module

const os = require('os');

var total = os.totalmem();
var free = os.freemem();

console.log('total: ' + total);

//Tempolate String
//ES6  or ES2015: ECMAScript 6

console.log(`free : ${free}`)
