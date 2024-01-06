import { Router, Request, Response } from "express";

export const homeController: Router = Router();

homeController.get('/', (req: Request, res: Response) => {
    res.render('home');
});
