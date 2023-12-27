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
    let path = req.url;
    
    if (path == '/') {
        path = '/index.html'
    }

    fs.stat('./static' + path,(err, stat) => {
        if(err || !stat.isFile()) {
            res.writeHead(404);
            res.end();
        } else {
            fs.createReadStream('./static' + path).pipe(res);
        }
    });
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