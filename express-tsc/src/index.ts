import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'hello from express with tsc' });
});

app.listen(6161, () => console.log('server listen on port 6161'));