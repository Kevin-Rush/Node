
console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log'; //sample URL, not a real service

function log(message){
    //send a HTTP request
    console.log(message);
}

module.exports = log; //this is making log public

    