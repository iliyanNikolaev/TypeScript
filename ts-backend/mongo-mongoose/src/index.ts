import express from 'express';
import { create } from 'express-handlebars';
import { logger } from './middlewares/logger';
import { router } from './router';
import path from 'path';

const app = express();

const hbs = create({ extname: '.hbs' });
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use(router);

app.listen(3131, () => console.log('server started, url http://localhost:3131'));
