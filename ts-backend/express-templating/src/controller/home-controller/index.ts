import { Router, Request, Response } from "express";

export const homeController: Router = Router();

homeController.get('/', (req: Request, res: Response) => {
    res.render('home', {
        users: [
            { name: 'john', email: 'john@abv.bg' },
            { name: 'megan', email: 'megan@abv.bg' },
            { name: 'jane', email: 'jane@abv.bg' }
        ]
    });
});
