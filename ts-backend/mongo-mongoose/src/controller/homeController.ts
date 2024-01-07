import { Router, Request, Response } from "express";
import { getList } from "../services/userService";

export const homeController: Router = Router();

homeController.get('/', async (req: Request, res: Response) => {
    const users = await getList();

    res.render('home', {
        users
    });
});

homeController.get('/about', (req: Request, res: Response) => {
    res.render('about');
});
