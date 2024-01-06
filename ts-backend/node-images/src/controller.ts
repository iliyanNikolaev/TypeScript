import { createReadStream, promises, readFile } from "fs";
import { IncomingMessage, ServerResponse } from "http";

type Handler = (req: IncomingMessage, res: ServerResponse) => Promise<void>

export async function controller(req: IncomingMessage, res: ServerResponse) {
    let handler: Handler;

    switch (req.method) {
        case 'GET':
            if (req.url == '/favicon.ico') {
                handler = notFound;
            } else if (req.url?.slice(0, 4) == '/img') {
                handler = getImg;
            } else if (req.url == '/') {
                handler = getIndex;
            } else if (req.url == '/style.css') {
                handler = getCss;
            } else {
                handler = notFound;
            }
            break;
        case 'POST':
            if (req.url == '/') {
                handler = postImg;
            } else {
                handler = notFound;
            }
            break;
        default:
            handler = notFound;
            break;
    }

    handler(req, res)
}

async function notFound(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(404);
    res.write('404 not found');
    res.end();
}

async function getImg(req: IncomingMessage, res: ServerResponse) {
    const fileName = '.' + req.url;
    createReadStream(fileName).pipe(res);
}

async function getIndex(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    readFile('./static/index.html', async (err, layout) => {
        if(!err) {
            res.write(layout.toString().replace('<%{imageboard}%>', await getImagesInHTML()));
            res.end();
        } else {
            notFound(req, res);
        }
    });
}

async function getCss(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, {
        'Content-Type': 'text/css'
    });
    createReadStream('./static/style.css').pipe(res);
}

async function postImg(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200);
    res.write('post img');
    res.end();
}

async function getImagesInHTML() {
    let files = await promises.readdir('./img');
    files = files.map(fName => `<img src="/img/${fName}" alt="cat"></img>`);
    return files.join('')
}