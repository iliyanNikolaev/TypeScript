import express from 'express';
import cors from 'cors';
import expressEjsLayouts from 'express-ejs-layouts';
import { router } from './router/router'

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false })); // forms
app.use(expressEjsLayouts);
app.use(express.static('src/public'))
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(router);

app.listen(6161, () => console.log('server listen on port 6161'));