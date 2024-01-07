import express, { Express } from 'express';
import { create } from "express-handlebars";
import { logger } from '../middlewares/logger';
import cors from 'cors';

import path from "path";

export function appConfig(app: Express) {
    const hbs = create({ extname: '.hbs' });
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    app.set('views', path.join(__dirname, '../views'));
    
    app.use(cors());
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.urlencoded({ extended: false })); // req.body -> forms from view
    app.use(express.json()); // req.body -> api requests
    app.use(logger);
}