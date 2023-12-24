"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    if (req.url == '/') {
        action(req, res);
    }
    else {
        res.writeHead(404);
        res.end();
    }
});
server.listen('3002', () => console.log('server runing on port 3002'));
const parseCookie = (req) => {
    if (req.headers.cookie) {
        const cookies = Object.fromEntries(req.headers.cookie.split(';')
            .map((c) => c.trim())
            .map((c) => c.split('=')));
        return cookies;
    }
    return {};
};
let sessions = {};
const action = (req, res) => {
    const cookies = parseCookie(req);
    const sessionId = cookies.sessionId || (Math.random() * 999999).toString(16);
    let session = sessions[sessionId] || { name: 'user' + sessionId };
    sessions[sessionId] = session;
    res.writeHead(200, {
        'set-cookie': `sessionId=${sessionId}; httpOnly`
    });
    res.write(`<p>You are user ${sessionId}</p>`);
    res.end();
};
