export {}

const { subscribe } = require('./observer');

subscribe('testing data', handler);

function handler(data: Object) {
    console.log('module 1 receive => ' + data);
}
