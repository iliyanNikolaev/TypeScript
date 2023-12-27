import { IncomingMessage, ServerResponse, createServer } from "http";
import fs from 'fs';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    switch (req.method) {
        case 'GET':
            handleGET(req, res);
            break;
        case 'POST':
            handlePOST(req, res);
            break;
    }
});

async function handleGET(req: IncomingMessage, res: ServerResponse) {
    if (req.url == '/') {
        fs.readFile('./static/index.html', (err, file) => {
            if(err) {
                res.writeHead(404);
                res.end();
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(file);
            res.end();
        });

    } else {
        res.writeHead(404);
        res.end();
    }
}

async function handlePOST(req: IncomingMessage, res: ServerResponse) {
    const body: string[] = [];

    req.on('data', (chunk: string) => {
        body.push(chunk);
    });
    req.on('end', () => {
        console.log(body.join(''));

        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.write(JSON.stringify({ message: 'received message!' }));
        res.end();
    });
}

server.listen(6161, () => console.log('server listening on port http://localhost:6161'));