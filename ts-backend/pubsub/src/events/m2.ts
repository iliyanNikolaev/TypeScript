import EventEmitter from "events";

export {}

const emitter: EventEmitter = require('./observer');

let counter = 1;
setInterval(() => {
    counter++;
    console.log('module 2 send data => ' + JSON.stringify({ message: counter }));
    emitter.emit('testing data', JSON.stringify({ message: counter }));
}, 5000)
