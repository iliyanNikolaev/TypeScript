import { createServer, IncomingMessage, ServerResponse } from 'http';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url == '/') {
        action(req, res);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen('3002', () => console.log('server runing on port 3002'));

type CookieObjType = { sessionId?: string };

const parseCookie = (req: IncomingMessage): CookieObjType => {
    if (req.headers.cookie) {
        const cookies = Object.fromEntries(
            req.headers.cookie.split(';')
                .map((c: string) => c.trim())
                .map((c: string) => c.split('='))
        )
        return cookies
    }

    return {}
}

type SessionsType = Record<string, SessionType>

type SessionType = {
    name: string
}

let sessions: SessionsType = {};

const action = (req: IncomingMessage, res: ServerResponse): void => {
    const cookies = parseCookie(req);

    const sessionId = cookies.sessionId || (Math.random() * 999999).toString(16);
    
    let session: SessionType = sessions[sessionId] || { name: 'user'+ sessionId };

    sessions[sessionId] = session;

    res.writeHead(200, {
        'set-cookie': `sessionId=${sessionId}; httpOnly`
    });
    res.write(`<p>You are user ${sessionId}</p>`);
    res.end();
}