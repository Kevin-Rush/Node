
const EventsEmitter = require('events'); //Camel case implies a class

const emitter = new EventsEmitter();

//Register a listener
emitter.on('messageLog', function(){    //you have to register a listener before calling it
    console.log('Listener');
});

//Raise an event
emitter.emit('messageLog', {id: 1, url: 'http://'});
