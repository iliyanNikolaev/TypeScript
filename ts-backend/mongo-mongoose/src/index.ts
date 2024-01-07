import express from 'express';
import { router } from './router';
import { dbConnect } from './config/dbConnect';
import { appConfig } from './config/appConfig';
import { successMessage } from './utils/startLogger';

start();

async function start() {
    try {
        await dbConnect();
        const app = express();
        appConfig(app);
        app.use(router);
        app.listen(3131, successMessage);
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}


