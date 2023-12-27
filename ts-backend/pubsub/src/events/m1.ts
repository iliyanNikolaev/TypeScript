import EventEmitter from "events";

export {}

const emitter: EventEmitter = require('./observer');

emitter.on('testing data', handler);

function handler(data: Object) {
    console.log('module 1 receive => ' + data);
}
