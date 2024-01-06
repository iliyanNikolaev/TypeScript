import { createServer } from "http";
import { controller } from "./controller";

const server = createServer(controller);

server.listen(3131, () => console.log('server started, url: http://localhost:3131'));