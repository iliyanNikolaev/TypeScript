import { createServer, IncomingMessage, ServerResponse } from 'http';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url == '/') {
        let visited = 1;
        if (req.headers.cookie) {
            const cookies = Object.fromEntries(
                req.headers.cookie.split(';')
                    .map((c: string) => c.trim())
                    .map((c: string) => c.split('='))
            );

            if(cookies.visited) {
                visited = Number(cookies.visited) + 1;
            }
        }
        res.writeHead(200, {
            'set-cookie': 'visited=' + visited
        })
        res.write(`<p>you visited this site ${visited} times</p>`);
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen('3002', () => console.log('server runing on port 3002'))