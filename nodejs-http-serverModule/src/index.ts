import { createServer, IncomingMessage, ServerResponse } from 'http';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {

    res.write('hello world');
    res.end();
});

server.listen('3002', () => console.log('server runing on port 3002'))