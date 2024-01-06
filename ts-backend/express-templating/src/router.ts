import { Router, Request, Response } from "express";
import { homeController } from "./controller/home-controller";

export const router: Router = Router();

router.use('/', homeController);

router.all('*', (req: Request, res: Response) => {
    res.status(404).send('<h1>404 Not found</h1>');
})