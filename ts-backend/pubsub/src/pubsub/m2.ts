export{}

const { publish } = require('./observer');

let counter = 1;
setInterval(() => {
    counter++;
    console.log('module 2 send data => ' + JSON.stringify({ message: counter }));
    publish('testing data', JSON.stringify({ message: counter }));
}, 5000)
