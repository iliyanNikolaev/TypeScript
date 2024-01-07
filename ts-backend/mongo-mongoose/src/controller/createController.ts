import { Router, Request, Response } from "express";

export const createController: Router = Router();

createController.get('/', (req: Request, res: Response) => {
    res.render('create');
});
