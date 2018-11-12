
const EventsEmitter = require('events'); //Camel case implies a class

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLog', function(arg) {    //you have to register a listener before calling it
    console.log('Listener', arg);
});

logger.log('message');