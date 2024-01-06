import express from 'express';
import { create } from 'express-handlebars';
import { logger } from './middlewares/logger';
import { router } from './router';

const app = express();

const hbs = create({ extname: '.hbs' });
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.static('public'));
app.use(logger);
app.use(router);

app.listen(3131, () => console.log('server started, url http://localhost:3131'));
