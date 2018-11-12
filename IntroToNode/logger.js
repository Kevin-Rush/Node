const EventsEmitter = require('events'); //Camel case implies a class

var url = 'http://mylogger.io/log'; //sample URL, not a real service

class Logger extends EventsEmitter {
    log(message){
        //send a HTTP request
        console.log(message);
        //Raise an event
        this.emit('messageLog', {id: 1, url: 'http://'});
    }
}

module.exports = Logger; //this is making log public
