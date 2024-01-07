import { Router, Request, Response } from "express";
import { homeController } from "./controller/homeController";
import { createController } from "./controller/createController";
import { detailsController } from "./controller/detailsController";

export const router: Router = Router();

router.use('/', homeController);
router.use('/create', createController);
router.use('/details', detailsController);

router.all('*', (req: Request, res: Response) => {
    res.status(404).render('404');
})