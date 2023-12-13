import express, { Request, Response } from 'express';
import cors from 'cors';
import expressEjsLayouts from 'express-ejs-layouts';

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false })); // forms
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set('views', 'src/views');


// routing table
app.get('/', (req: Request, res: Response) => {
    res.render('home', { });
});

app.get('/catalog', (req: Request, res: Response) => {
    res.render('catalog', { });
});

app.get('/about', (req: Request, res: Response) => {
    res.render('about', { });
});

app.listen(6161, () => console.log('server listen on port 6161'));