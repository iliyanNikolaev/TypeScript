import { Router, Request, Response } from "express";
import { usersController } from "./controller/usersController";
import { createController } from "./controller/createController";
import { apiController } from "./controller/apiController";
import { postsController } from "./controller/postsController";
import { connectionsController } from "./controller/connectionsController";

export const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('home');
});

router.use('/users', usersController);
router.use('/posts', postsController);
router.use('/create', createController);
router.use('/connections', connectionsController);

router.use('/api', apiController);

router.all('*', (req: Request, res: Response) => {
    res.status(404).render('404');
})