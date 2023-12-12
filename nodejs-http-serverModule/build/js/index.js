"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
    res.write('hello world');
    res.end();
});
server.listen('3002', () => console.log('server runing on port 3002'));
