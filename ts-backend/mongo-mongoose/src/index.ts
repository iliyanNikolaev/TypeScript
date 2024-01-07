import { dbConnect } from './config/dbConnect';
import express from 'express';
import { appConfig } from './config/appConfig';
import { router } from './router';
import { successMessage } from './utils/successMessage';

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


